import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "@/components/organisms/NavMenu/NavMenu";

export const metadata: Metadata = {
  title: "CoEdify — AI-Powered Talent & Automation Platform",
  description:
    "AI-driven platform empowering professionals and teams to achieve more — together.",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
