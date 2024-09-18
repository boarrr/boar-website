import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { nunito } from "@/app/ui/fonts";
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "Ryan Pitman | AI, Cybersecurity & Software Development Enthusiast",
  description: "Ryan Pitman: A Computer Science student exploring the intersections of AI, Cybersecurity, and Software Development. Dive into my portfolio to see how I blend creativity and technical expertise in the evolving world of technology.",
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
