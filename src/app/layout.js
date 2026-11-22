
import { Suspense } from "react";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

import { FitLogProvider } from "@/context/FitLogContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "FitLog – Workout Library",
  description: "Browse workouts, build today's plan and log every set.",
  icons: {
    icon: [{ url: "/logo.png?v=2", type: "image/png" }],
    shortcut: "/logo.png?v=2",
    apple: "/logo.png?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg font-sans text-fg antialiased">
        <FitLogProvider>
          <Suspense
            fallback={
              <div className="sticky top-0 z-50 h-[57px] border-b border-line bg-bg" />
            }
          >
            <Navbar />
          </Suspense>

          <main className="flex-1">{children}</main>

          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}
