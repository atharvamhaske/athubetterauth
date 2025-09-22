import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="mb-4 sm:mb-6 text-start ">
          <h2 className="font-instrument-serif text-3xl sm:text-4xl !leading-[0.7]">BetterAuth Boilerplate<br  /> <span className="text-sm sm:text-md text-black "> ~by atharva mhaske</span></h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
            <p className="md:text-lg text-xs font-satoshi text-accent-foreground text-wrap md:text-left">
              This is Modern Betterauth boilerplate template with tech stack of ofc Better-Auth, Prisma ORM, PostgreSQL, Tailwind v4 & ShadCN UI for secure web development, Customize according to your own used.
              <br /> Truly an open source, open for contributions.
            </p>
            <Link
              href="/sign-in"
              className="self-end inline-flex items-center gap-1 px-2 py-0.5 sm:px-4 sm:py-1 text-xs sm:text-sm bg-primary/20 text-primary font-satoshi whitespace-nowrap rounded-md hover:bg-primary/30 transition-colors duration-200 shadow-md sm:shadow-lg hover:shadow-xl"
            >
              Sign In
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-3 h-3 sm:w-4 sm:h-3"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div className="p-1.5 sm:px-2  mt-3 sm:mt-4 border border-dashed hover:border-primary/50 bg-card flex items-center justify-between transition-all duration-200 delay-75">
            <pre className="font-mono text-[9px] xs:text-[10px] sm:text-xs bg-linear-to-r from-muted-foreground to-foreground bg-clip-text text-transparent overflow-hidden text-ellipsis whitespace-nowrap max-w-[85%]">
              git clone {siteConfig.socials.github}
            </pre>
            <span className="flex-shrink-0">
              <CopyButton text={`git clone ${siteConfig.socials.github}`} />
            </span>
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
                The Postgres database which is easy to use ORMs like Prisma, that&apos;s it lol. What else you need?</p>
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
