import { Instrument_Serif } from "next/font/google"
import localFont from "next/font/local"

export const satoshi = localFont({
  src: [
    { path: '../fonts/Satoshi-Light.woff2', weight: '300' },
    { path: '../fonts/Satoshi-Regular.woff2', weight: '400' },
    { path: '../fonts/Satoshi-Medium.woff2', weight: '500' },
    { path: '../fonts/Satoshi-Bold.woff2', weight: '700' },
    { path: '../fonts/Satoshi-Black.woff2', weight: '900' },
  ],
  variable: '--font-satoshi',
  fallback: ['Arial', 'Helvetica', 'sans-serif']
});

export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-instrument-serif'
})
