"use client"

import { Box, Flex, HStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"

import Logo from "./logo"
import LanguageMenu from "./language-menu"

const Header = () => (
  <Box
    as='header'
    h={85}
    maxW='100vw'
    pos='sticky'
    top={0}
    right={0}
    left={0}
    zIndex='sticky'
    bgColor='primary.500'
    color='white'
  >
    <Flex
      w='1210px'
      h='full'
      justifyContent='space-between'
      align='center'
      mx='auto'
    >
      <Logo />

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
    </Flex>
  </Box>
)

export default Header
