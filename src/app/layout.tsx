import type { Metadata } from "next";
import "./globals.css";
import { EventBusProvider } from "../providers/event-bus.provider";
import { ThemeProvider } from "../providers/theme.provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-screen items-center justify-center">
        <ThemeProvider>
          <EventBusProvider>{children}</EventBusProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
