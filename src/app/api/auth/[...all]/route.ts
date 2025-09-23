import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/src/lib/auth";
import { NextResponse } from "next/server";

// Add error handling
const handler = toNextJsHandler(auth);

export const POST = async (req: Request) => {
  try {
    // Log the request URL and path for debugging
    console.log("Auth API request:", {
      url: req.url,
      path: new URL(req.url).pathname
    });
    
    // Check if this is a social login request
    if (req.url.includes("/sign-in/social")) {
      // For social login, extract and log provider info
      const body = await req.clone().json().catch(() => ({}));
      console.log("Social login attempt:", { 
        provider: body?.provider,
        hasClientId: !!process.env[`${body?.provider?.toUpperCase()}_CLIENT_ID`],
        hasClientSecret: !!process.env[`${body?.provider?.toUpperCase()}_CLIENT_SECRET`]
      });
    }
    
    return await handler.POST(req);
  } catch (error: any) {
    // Enhanced error logging
    console.error("Auth API error:", {
      message: error.message,
      code: error.code,
      name: error.name,
      stack: error.stack,
    });
    
    // Return more specific error information
    return NextResponse.json(
      { 
        error: "Authentication service error",
        message: error.message || "Unknown error",
        code: error.code || "INTERNAL_ERROR"
      },
      { status: 500 }
    );
  }
};

export const GET = async (req: Request) => {
  try {
    // Log the request URL and path for debugging
    console.log("Auth API GET request:", {
      url: req.url,
      path: new URL(req.url).pathname
    });
    
    return await handler.GET(req);
  } catch (error: any) {
    // Enhanced error logging
    console.error("Auth API GET error:", {
      message: error.message,
      code: error.code,
      name: error.name,
      stack: error.stack,
    });
    
    // Return more specific error information
    return NextResponse.json(
      { 
        error: "Authentication service error",
        message: error.message || "Unknown error",
        code: error.code || "INTERNAL_ERROR"
      },
      { status: 500 }
    );
  }
};