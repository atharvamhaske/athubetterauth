import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { User } from "@/src/lib/auth";
import { getServerSession } from "@/src/lib/get-session";
import { Metadata } from "next";
import { unauthorized } from "next/navigation";


export const metadata: Metadata ={
    title: "Dashboard"
}

export default async function Dashboard() {
    const session = await getServerSession();
    const user = session?.user

    // if(!user) unauthorized()

        return(
          <div className="mx-auto w-full max-w-3xl px-1 py-2 border-2 border-dashed border-black/40 h-screen">
            {/* <ProfileInformation user={user} /> */}
          </div>
        )
}

interface ProfileInformationProps {
    user: User
}

function ProfileInformation({user}: ProfileInformationProps) {
    return (
        <Card>
             <CardHeader>
                <CardTitle className="font-instrument-serif font-light justify-center text-4xl text-center flex items-center ">
                  Welcome You are Authenticated !!
                </CardTitle>
                <CardDescription className="font-satoshi text-lg hover:text-foreground">This is protected route and dashboard is only available to seen for authenticated user</CardDescription>
             </CardHeader>
             <CardContent>
                <div className="text-center font-satoshi text-md">This is the card where yout will see basic details as who logged in</div>
             </CardContent>
        </Card>
    )
}

function EmailVerificationAlert() {
    return (
        <div className="">
            {/* 
            here we will add a line please verify your email address to see and will add one button with link tag redirect to /verify-email */}
        </div>
    )
}