import { BirdIcon } from "lucide-react"
import "./globals.css"
import { Inter } from "next/font/google"
import TopNav from "@/components/top-nav"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hoot & Hawk",
  description: "Document scanning app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          <main className="flex flex-col items-center min-h-screen p-4">
            <TopNav />

            <BirdIcon size={100} />
            <h1 className="text-6xl font-black mb-10">Hook & Hawk</h1>

            {children}
          </main>
        </TooltipProvider>
      </body>
    </html>
  )
}
