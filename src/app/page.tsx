import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import { CopyButton } from "../components/copy-button";

export const metadata: Metadata = {
  title: "BetterAuth",
  description: "The boilerplate for your next NextJs just use this and iterate over to use this"
}

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto my-4 sm:my-8 md:mt-12 min-h-[80vh] border border-dashed border-black py-2 px-3 sm:px-4 overflow-y-auto">
      <div className="flex flex-col w-full">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="font-instrument-serif text-3xl sm:text-4xl !leading-[0.9]">BetterAuth Boilerplate<br  /> <span className="text-sm sm:text-xl text-black "> ~by Atharva Mhaske</span></h2>
          <p className="md:text-xl text-xs font-satoshi text-accent-foreground text-wrap md:text-left">This is Modern Betterauth boilerplate template with tech stack of ofc Better-Auth, Prisma ORM, PostgreSQL, Tailwind v4 & ShadCN UI for secure web development, Customize according to your own used. Truly an open source, open for contributions.</p>
          <div className="p-2 mt-4 border border-dashed hover:border-primary/50 bg-card text-xs md:text-sm flex items-center justify-between transition-all duration-200 delay-75">
            <pre className="font-mono bg-linear-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
              git clone {siteConfig.socials.github}
            </pre>
            <CopyButton text={`git clone ${siteConfig.socials.github}`} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full">
          <div className="flex flex-col justify-between gap-3 sm:gap-4">
            <div className="border border-neutral-300 h-[8rem] sm:h-[10rem] flex flex-col justify-end p-2 sm:px-3">
              <h1 className="text-lg sm:text-xl font-satoshi font-semibold">NextJS</h1>
              <p className="text-sm sm:text-md text-muted-foreground font-satoshi">Used NextJS as frontend React framework, which have lots of features and easy to use.</p>
            </div>

            <div className="border border-neutral-300 h-[8rem] sm:h-[10rem] flex flex-col justify-end p-2 sm:px-3">
              <h1 className="text-lg sm:text-xl font-satoshi font-semibold">Postgres DB</h1>
              <p className="text-sm sm:text-md text-muted-foreground font-satoshi">
                The Postgres database which is easy to use ORMs like Prisma, that's it lol. What else you need?</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 sm:gap-4">
            <div className="border border-neutral-300 h-[8rem] sm:h-[10rem] flex flex-col justify-end p-2 sm:px-3">
              <h1 className="text-lg sm:text-xl font-satoshi font-semibold">TailwindCSS</h1>
              <p className="text-sm sm:text-md text-muted-foreground font-satoshi">Utility-first CSS framework for rapidly building custom UI components and widely used.</p>
            </div>

            <div className="border border-neutral-300 h-[8rem] sm:h-[10rem] flex flex-col justify-end p-2 sm:px-3">
              <h1 className="text-lg sm:text-xl font-satoshi font-semibold">ShadCN UI</h1>
              <p className="text-sm sm:text-md text-muted-foreground font-satoshi">
                The modern UI components library with wide variety of ready to use components.
                Is built with RadixUI & TailwindCSS.</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 sm:gap-4">
            <div className="border border-neutral-300 h-[8rem] sm:h-[10rem] flex flex-col justify-end p-2 sm:px-3">
              <h1 className="text-lg sm:text-xl font-satoshi font-semibold">Prisma ORM</h1>
              <p className="text-sm sm:text-md text-muted-foreground font-satoshi">A postgres based ORM for Typescirpt, Ship faster with Prisma postgres database best with NextJs.</p>
            </div>

            <div className="border border-neutral-300 h-[8rem] sm:h-[10rem] flex flex-col justify-end p-2 sm:px-3">
              <h1 className="text-lg sm:text-xl font-satoshi font-semibold">Better Auth</h1>
              <p className="text-sm sm:text-md text-muted-foreground font-satoshi">
              The most comprehensive authentication framework for TypeScript.Best auth solution with OAuth, magiclinks & more.</p>
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
}
