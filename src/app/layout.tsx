import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Midsommar i Gundrabol",
  description: "Det största midsommarfirandet i Gundrabol!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
        ></link>
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between px-12 pt-24 lg:p-0">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <a href="/">
              <p className="fixed left-0 top-0 flex w-full justify-center backdrop-blur-2xl blurred dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
                <Image
                  src="/midsommarfest.svg"
                  alt="midsommarfest"
                  className="dark:invert"
                  width={350}
                  height={150}
                  priority
                />
              </p>
            </a>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="/"
                rel="noopener noreferrer"
              >
                Midsommar i{" "}
                <Image
                  src="/gunrabol.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={150}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
