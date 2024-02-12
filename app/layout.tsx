import { type ReactNode } from "react"

import { Lexend_Deca } from "next/font/google"

import { Providers } from "@/providers/index"
import Layout from "@/components/layout"

interface RootLayoutProps {
  children: ReactNode
}

const ubuntu = Lexend_Deca({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
})

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang='en' data-theme='light'>
      <body className={ubuntu.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
