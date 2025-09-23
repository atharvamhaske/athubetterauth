import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/src/lib/auth";
import { NextResponse } from "next/server";

// Add error handling
const handler = toNextJsHandler(auth);

export const POST = async (req: Request) => {
  try {
    return await handler.POST(req);
  } catch (error) {
    console.error("Auth API error:", error);
    return NextResponse.json(
      { error: "Authentication service error" },
      { status: 500 }
    );
  }
};

export const GET = async (req: Request) => {
  try {
    return await handler.GET(req);
  } catch (error) {
    console.error("Auth API error:", error);
    return NextResponse.json(
      { error: "Authentication service error" },
      { status: 500 }
    );
  }
};