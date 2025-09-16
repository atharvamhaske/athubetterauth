import { Metadata } from "next"
import AuthCard from "@/src/components/auth/auth-card"

export const metadata: Metadata = {
  title: "Auth Card Demo",
  description: "A demo page for the AuthCard component"
}

export default function AuthCardDemo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-muted/30">
      <div className="w-full max-w-md mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Auth Card Demo</h1>
          <p className="text-muted-foreground mt-2">
            This is a demo of the AuthCard component
          </p>
        </div>
        
        <AuthCard 
          title="Welcome Back" 
          description="Sign in to your account to continue" 
          mode="sign-in"
        />
        
        <div className="mt-8 pt-8 border-t border-dashed">
          <h2 className="text-xl font-semibold mb-4 text-center">Sign Up Variant</h2>
          <AuthCard 
            title="Create an Account" 
            description="Sign up to get started with our platform" 
            mode="sign-up"
          />
        </div>
      </div>
    </div>
  )
}
