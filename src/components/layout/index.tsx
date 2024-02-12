"use client"

import { ReactNode } from "react"

import { Container, Box } from "@chakra-ui/layout"
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav"
import { useBreakpointValue } from "@chakra-ui/react"

import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  const isDesktop = Boolean(
    useBreakpointValue({ base: false, xl: true }, { ssr: true }),
  )

  return (
    <Container maxW='100vw' p={0}>
      <SkipNavLink id='skip-nav' zIndex='skipLink'>
        Skip to Content
      </SkipNavLink>

      <Box display='flex'>
        <Box w='full'>
          <Header />
          {isDesktop && <Navigation />}

          <Container
            as='main'
            centerContent
            maxW='full'
            p={0}
            minH='calc(100vh - 85px)'
          >
            <SkipNavContent id='skip-nav' />
            {children}
          </Container>

          <Footer />
        </Box>
      </Box>
    </Container>
  )
}

export default Layout
