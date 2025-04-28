import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono as GeistMono, Nunito } from "next/font/google"
import { unstable_ViewTransition as ViewTransition } from "react"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    template: "%s | MiFactura",
    default: "Home | MiFactura",
  },
  description: "MiFactura",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        <ViewTransition>
          {children}
        </ViewTransition>

        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  )
}
