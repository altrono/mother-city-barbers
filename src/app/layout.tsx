import type { Metadata } from "next"
import { Oswald } from 'next/font/google'
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mother City Baerbers",
  description: "Premium barbershop services in the heart of Cape Town",
  keywords: "Solon, Barbershop, Vercel, Next.js, AWS,  Google Cloud, mobile app development, web app development, tech startup, innovation, digital transformation",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={oswald.className}
      >
        {children}
      </body>
    </html>
  );
}
