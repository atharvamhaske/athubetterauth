import Link from "next/link"
import { Terminal } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Error page"
}

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <Card className="w-full max-w-xl border-dashed border-2 rounded-none shadow-none">
        <CardHeader className="border-b border-dashed pb-4">
          <div className="flex items-center space-x-2">
            <Terminal className="h-5 w-5" />
            <span className="text-sm font-mono font-semibold underline">error home not found</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-0 font-mono">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-foreground">page</span>
              <span>status...</span>
            </div>
            <div className="space-y-1 pl-6 ">
              <p className="text-6xl font-satoshi font-light">404</p>
              <p className="text-foreground font-instrument-serif text-3xl">Page not found</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex justify-between space-y-2 items-center">
                <span className="text-black">umm page you&apos;re trying is not made by my guardian</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4 border-t border-dashed mt-3">
          <Button variant="default" className="w-full font-satoshi font-semibold " asChild>
            <Link href="/">take me home deddy, it&apos;s late already</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}