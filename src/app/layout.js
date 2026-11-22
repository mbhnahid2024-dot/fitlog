import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { FitLogProvider } from "@/context/FitLogContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
  title: "FitLog – Workout Library",
  description: "Browse workouts, build today's plan and log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg font-sans text-fgtext-fg antialiased">
        <FitLogProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}