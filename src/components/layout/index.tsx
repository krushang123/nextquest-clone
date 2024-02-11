import React, { ReactNode } from "react"

import { Container, Box } from "@chakra-ui/layout"
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav"

import Header from "./header"

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <Container maxW='100vw' p={0}>
      <SkipNavLink id='skip-nav' zIndex='skipLink'>
        Skip to Content
      </SkipNavLink>

      <Box display='flex'>
        <Box w='full'>
          <Header />

          <Container
            as='main'
            centerContent
            px={{ base: 6, lg: 10 }}
            py={8}
            minH={`cal(100vh - 85px)`}
          >
            <SkipNavContent id='skip-nav' />
            {children}
          </Container>
        </Box>
      </Box>
    </Container>
  )
}

export default Layout
