import { NextRequest, NextResponse } from "next/server";
import { ReviewRequest } from "@/lib/types";
import { generateReview } from "@/lib/ai";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  // Simple rate limiting
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (limit && limit.resetAt > now) {
    if (limit.count >= 10) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Guardian needs a break." },
        { status: 429 }
      );
    }
    limit.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60000 });
  }

  try {
    const body = (await request.json()) as ReviewRequest;

    if (!body.code || !body.prTitle || !body.persona) {
      return NextResponse.json(
        { error: "Missing required fields: code, prTitle, persona" },
        { status: 400 }
      );
    }

    const review = await generateReview({
      code: body.code.slice(0, 5000),
      prTitle: body.prTitle.slice(0, 200),
      persona: body.persona,
    });

    return NextResponse.json(review);
  } catch {
    return NextResponse.json(
      { error: "Guardian experienced an existential crisis." },
      { status: 500 }
    );
  }
}
