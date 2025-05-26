import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "A.G.V.I.O.N - AI-Powered Chatbot & Workflow Automation",
  description:
    "A.G.V.I.O.N is a no-code/low-code platform for building intelligent chatbots and automation workflows across messaging channels.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/images/agvion-logo.png" },
      { url: "/images/agvion-logo.png", type: "image/png" }
    ],
    shortcut: "/images/agvion-logo.png",
    apple: "/images/agvion-logo.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
