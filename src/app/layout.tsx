import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { nunito } from "@/app/ui/fonts";
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "Ryan Pitman | AI, Cybersecurity & Software Development Enthusiast",
  description: "Ryan Pitman: A Computer Science student exploring AI, Cybersecurity, and Software Development.",
  openGraph: {
    title: "Ryan Pitman | AI, Cybersecurity & Software Development Enthusiast",
    description: "Explore Ryan's portfolio blending AI, Cybersecurity, and software development.",
    images: [
      {
        url: "/profile_photo.png",
        width: 800,
        height: 600,
        alt: "Profile photo of Ryan Pitman",
      },
    ],
    type: "website",
    locale: "en_IE",
  }
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
