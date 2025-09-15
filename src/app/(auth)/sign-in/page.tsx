import type { Metadata } from "next";
import  SignInForm  from "./form"

export const metadata: Metadata = {
    title: "Sign In"
}

export default function SignIn() {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-center px-4 min-h-svh">
            <SignInForm />
        </div>
    )
}