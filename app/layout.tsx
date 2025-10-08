import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hugo de Mendoza - Mechanical Engineer & Computer Scientist",
  description:
    "Portfolio of Hugo de Mendoza - Mechanical Engineer and Computer Scientist specializing in robotics, embedded systems, and autonomous vehicles.",
  keywords: [
    "Hugo de Mendoza",
    "Mechanical Engineer",
    "Computer Scientist",
    "Robotics",
    "UC San Diego",
    "Embedded Systems",
    "Autonomous Vehicles",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 lg:ml-80">{children}</div>
        </div>
      </body>
    </html>
  )
}
