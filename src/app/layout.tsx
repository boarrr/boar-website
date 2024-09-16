import type { Metadata } from "next";
import { nunito } from "@/app/ui/fonts";
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "Ryan Pitman | CompSci",
  description: "The personal website of Ryan Pitman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
