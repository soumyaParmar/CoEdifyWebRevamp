import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "@/components/organisms/NavMenu/NavMenu";

export const metadata: Metadata = {
  title: "CoEdify — AI-Powered Talent & Automation Platform",
  description:
    "AI-driven platform empowering professionals and teams to achieve more — together.",
};

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/atom/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu />
          {children}
          <div className="fixed top-6 transform hidden md:block right-0 rotate-90 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
