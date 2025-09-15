import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-background text-foreground p-8">
      <h1 className="text-6xl font-satoshi text-primary">
        Hello with Satoshi Font
      </h1>
      <p className="text-4xl font-instrument-serif text-secondary">
        This text uses Instrument Serif
      </p>
      <div className="flex gap-6">
        <div className="p-6 rounded-lg bg-card text-card-foreground shadow font-satoshi">
          Card with Satoshi
        </div>
        <div className="p-6 rounded-lg bg-accent text-accent-foreground font-instrument-serif">
          Card with Instrument Serif
        </div>
      </div>
    </div>
  );
}
