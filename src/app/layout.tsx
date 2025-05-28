import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: {
    default: "Nidhi's Portfolio",
    template: "%s | Nidhi's Portfolio",
  },
  description:"Explore Nidhi's web development portfolio showcasing front-end projects, UI/UX designs, and innovative web solutions using Next.js and React.",
  keywords: ["Nidhi", "web developer", "frontend developer", "Next.js portfolio", "React projects",
  "UI/UX design", "JavaScript", "TypeScript", "personal website","Nidhi's Portfolio"],
  metadataBase: new URL("https://nidhi-s-portfolio-z6or.vercel.app"),
  openGraph: {
    title: "Nidhi's Portfolio",
    description: "A great description for social previews.",
    url: "https://nidhi-s-portfolio-z6or.vercel.app",
    siteName: "Nidhi's Portfolio",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Nidhi's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "Nidhi's Portfolio",
  description: "A great description for social previews.",
  images: ["/images/logo.png"],
},
  icons: {
    icon: "/images/logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster /> 
      </body>
    </html>
  );
}
