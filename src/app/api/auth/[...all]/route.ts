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
      try {
        // For social login, extract and log provider info
        const body = await req.clone().json().catch(() => ({}));
        const provider = body?.provider?.toLowerCase();
        
        if (!provider) {
          return NextResponse.json(
            { error: "Missing provider parameter" },
            { status: 400 }
          );
        }
        
        // Check if provider credentials are configured
        const clientIdEnv = `${provider.toUpperCase()}_CLIENT_ID`;
        const clientSecretEnv = `${provider.toUpperCase()}_CLIENT_SECRET`;
        
        const hasClientId = !!process.env[clientIdEnv];
        const hasClientSecret = !!process.env[clientSecretEnv];
        
        console.log("Social login attempt:", { 
          provider,
          hasClientId,
          hasClientSecret
        });
        
        // If credentials are missing, return a clear error
        if (!hasClientId || !hasClientSecret) {
          console.error(`Missing credentials for ${provider} provider`);
          return NextResponse.json(
            { 
              error: "Provider not configured",
              code: "PROVIDER_NOT_FOUND",
              message: `${provider} login is not properly configured on the server`
            },
            { status: 400 }
          );
        }
      } catch (parseError) {
        console.error("Error parsing social login request:", parseError);
      }
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
    return await handler.GET(req);
  } catch (error) {
    console.error("Auth API error:", error);
    return NextResponse.json(
      { error: "Authentication service error" },
      { status: 500 }
    );
  }
};