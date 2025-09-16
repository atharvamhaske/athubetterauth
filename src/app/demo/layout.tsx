import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    default: "Component Demos",
    template: "%s | Component Demos"
  },
  description: "Demo pages for various components"
}

export default function DemoLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">BetterAuth</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <Link 
              href="/demo/auth-card"
              className="transition-colors hover:text-foreground/80"
            >
              Auth Card
            </Link>
            <Link 
              href="/"
              className="transition-colors hover:text-foreground/80"
            >
              Back to App
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

