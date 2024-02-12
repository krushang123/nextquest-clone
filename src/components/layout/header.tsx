"use client"

import { useBreakpointValue } from "@chakra-ui/react"
import { Box, Flex, HStack } from "@chakra-ui/layout"
import { Button, IconButton } from "@chakra-ui/button"
import { Menu, MenuButton } from "@chakra-ui/menu"
import { HamburgerIcon } from "@chakra-ui/icons"

import Logo from "./logo"
import LanguageMenu from "./language-menu"

const Header = () => {
  const isMobile = Boolean(
    useBreakpointValue({ base: true, sm: false }, { ssr: true }),
  )

  return (
    <Box
      as='header'
      h={85}
      maxW='100vw'
      px={{ base: 4, xl: 0 }}
      bgColor='primary.500'
      color='white'
      borderBottom='1px solid white'
    >
      <Flex
        w={{ base: "100%", xl: "1210px" }}
        h='full'
        justifyContent='space-between'
        align='center'
        mx='auto'
      >
        <Logo />

        {isMobile && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='ghost'
              color='white'
            />
          </Menu>
        )}

        {!isMobile && (
          <HStack spacing={6}>
            <LanguageMenu />

            <Button
              variant='outline'
              borderColor='white'
              color='white'
              _hover={{ background: "transparent" }}
            >
              Download Brochure
            </Button>

            <Button
              bgColor='white'
              color='#8C52FF'
              textTransform='uppercase'
              _hover={{ bgColor: "white" }}
            >
              Contact Us
            </Button>
          </HStack>
        )}
      </Flex>
    </Box>
  )
}

export default Header
