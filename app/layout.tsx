import type { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "@/components/Providers";
import "styles/globals.css";

export const metadata: Metadata = {
  title: "Strata Committee Owners Corporation Portal",
  description: "Strata Committee Owners Corporation Portal",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
