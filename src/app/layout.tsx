import type { Metadata } from "next"
import { Inter } from "next/font/google"
import classNames from "classnames"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import Sidebar from "@/components/Sidebar"
import Providers from "@/components/Providers"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dukaan Demo",
  description: "Payments screen for Dukaan Demo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={classNames(
            inter.className,
            "w-screen h-screen flex flex-row"
          )}
        >
          <Sidebar />
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} position="bottom" />
          )}
          <div className="h-full flex-1 bg-[#FAFAFA]">{children}</div>
        </body>
      </Providers>
    </html>
  )
}
