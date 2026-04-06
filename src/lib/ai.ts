import { ReviewOutput, ReviewRequest } from "./types";
import { buildSystemPrompt, buildUserPrompt } from "./prompts";
import { generateFallbackReview } from "./fallback";

export async function generateReview(req: ReviewRequest): Promise<ReviewOutput> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return generateFallbackReview(req);
  }

  try {
    const systemPrompt = buildSystemPrompt(req.persona);
    const userPrompt = buildUserPrompt(req.code, req.prTitle);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userPrompt }],
            },
          ],
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          generationConfig: {
            responseMimeType: "application/json",
            temperature: 1.0,
            maxOutputTokens: 2048,
          },
        }),
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!response.ok) {
      console.error("Gemini API error:", response.status);
      return generateFallbackReview(req);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return generateFallbackReview(req);
    }

    const parsed = JSON.parse(text) as ReviewOutput;
    parsed.reviewerPersona = req.persona;

    // Validate required fields
    if (!parsed.verdict || !parsed.summary || !parsed.blockReason) {
      return generateFallbackReview(req);
    }

    return parsed;
  } catch (error) {
    console.error("AI generation failed, using fallback:", error);
    return generateFallbackReview(req);
  }
}
