import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light"
}

export const metadata: Metadata = {
  metadataBase: new URL("https://ccda-south-sudan.org"),
  title: {
    default: "Christian Community Development Agency | South Sudan",
    template: "%s | CCDA South Sudan"
  },
  description: "Faith-driven humanitarian organization in South Sudan. We alleviate the suffering of under-privileged populations through sustainable development and life-saving aid.",
  keywords: ["CCDA", "South Sudan", "humanitarian aid", "sustainable development", "Christian relief", "NGO South Sudan"],
  authors: [{ name: "CCDA South Sudan" }],
  creator: "CCDA South Sudan",
  openGraph: {
    title: "Christian Community Development Agency | South Sudan",
    description: "Empowering communities and delivering life-saving assistance across South Sudan.",
    url: "/",
    siteName: "CCDA South Sudan",
    images: [
      {
        url: "/og-image.png", // Ensure this file exists in your /public folder
        width: 1200,
        height: 630,
        alt: "CCDA South Sudan Logo"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCDA South Sudan",
    description: "Faith-driven humanitarian aid for South Sudan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}