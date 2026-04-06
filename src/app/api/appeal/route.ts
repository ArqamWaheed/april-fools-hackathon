import { NextRequest, NextResponse } from "next/server";
import { ReviewerPersona, ReviewOutput } from "@/lib/types";
import { AppealRequest, generateAppeal } from "@/lib/appeal";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  // Simple rate limiting
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (limit && limit.resetAt > now) {
    if (limit.count >= 10) {
      return NextResponse.json(
        { error: "Rate limit exceeded. The Arbitration Board is overwhelmed." },
        { status: 429 }
      );
    }
    limit.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60000 });
  }

  try {
    const body = (await request.json()) as {
      originalBlockReason: string;
      code: string;
      prTitle: string;
      appealRound: number;
      persona: ReviewerPersona;
    };

    if (!body.code || !body.prTitle || !body.originalBlockReason || !body.appealRound) {
      return NextResponse.json(
        { error: "Missing required fields: code, prTitle, originalBlockReason, appealRound" },
        { status: 400 }
      );
    }

    // Build a minimal ReviewOutput for the appeal request
    const originalReview: ReviewOutput = {
      verdict: "blocked",
      summary: "Original review blocked this PR.",
      checks: [],
      comments: [],
      blockReason: body.originalBlockReason.slice(0, 1000),
      nextSteps: [],
      reviewerPersona: body.persona || "guardian_core",
    };

    const appealReq: AppealRequest = {
      originalReview,
      code: body.code.slice(0, 5000),
      prTitle: body.prTitle.slice(0, 200),
      appealRound: Math.max(1, Math.min(3, body.appealRound)),
    };

    const appeal = await generateAppeal(appealReq);

    return NextResponse.json(appeal);
  } catch {
    return NextResponse.json(
      { error: "The Arbitration Board experienced an existential crisis." },
      { status: 500 }
    );
  }
}
