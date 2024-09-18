'use client'

import "./globals.css";
import Sidenav from "./Sidenav/Sidenav";
import { ThemeProvider } from "./ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="bg-background text-foreground">
          <div className="flex bg-background">
            <Sidenav />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}