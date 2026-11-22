import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata = {
  title: "FitLog – Workout Library",
  description: "Browse workouts, build today's plan and log every set.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}