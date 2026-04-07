import { NextRequest, NextResponse } from "next/server";
import { generateRoast } from "@/lib/roast";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: NextRequest) {
  // Simple rate limiting
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (limit && limit.resetAt > now) {
    if (limit.count >= 10) {
      return NextResponse.json(
        { error: "Rate limit exceeded. The Code Quality Engine needs to recalibrate." },
        { status: 429 }
      );
    }
    limit.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60000 });
  }

  try {
    const body = (await request.json()) as {
      code: string;
      prTitle: string;
      apiKey?: string;
    };

    if (!body.code || !body.prTitle) {
      return NextResponse.json(
        { error: "Missing required fields: code, prTitle" },
        { status: 400 }
      );
    }

    const roast = await generateRoast(
      body.code.slice(0, 5000),
      body.prTitle.slice(0, 200),
      body.apiKey
    );

    return NextResponse.json(roast);
  } catch {
    return NextResponse.json(
      { error: "The Code Quality Engine imploded under the weight of your code." },
      { status: 500 }
    );
  }
}
