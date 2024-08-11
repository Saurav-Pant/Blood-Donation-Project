import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ThemeProvider } from "@/Context/ThemeContext";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"



export const metadata: Metadata = {
  title: "Blood Donation",
  description: "Help to get blood donation",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
          className={cn(
            "min-h-screen bg-gradient-to-r from-rose-50 to-teal-50 antialiased",
            poppins.className,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            {/* <ScrollToTopButton /> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
