import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IshraTahir Mattresses — Rest Designed Like Your Best Work",
  description: "IshraTahir Mattresses — Rest Designed Like Your Best Work",
  openGraph: {
    title: "IshraTahir Mattresses — Rest Designed Like Your Best Work",
    description: "IshraTahir Mattresses — Rest Designed Like Your Best Work",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "scroll-smooth",
        "antialiased",
        inter.variable,
        jetbrainsMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-[#F6F5F2] text-black font-sans antialiased selection:bg-block-lime">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
