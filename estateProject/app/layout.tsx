import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "../src/components/auth-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JT Real Estate Agency - Professional Property Services",
  description:
    "Find your dream home with JT Real Estate Agency. Professional real estate services in Tema and Greater Accra Region.",
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
