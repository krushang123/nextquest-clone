"use client"

import { Flex } from "@chakra-ui/layout"

const Header = () => {
  return (
    <Flex
      as='header'
      h={85}
      maxW={`calc(100vw - 1210px)`}
      pos='sticky'
      top={0}
      right={0}
      left={0}
      zIndex='sticky'
      justifyContent='space-between'
      align='center'
      px={{ base: 6, lg: 10 }}
      py={{ base: 2, lg: 6 }}
      boxShadow={{ base: "lg", lg: "none" }}
      bgColor='primary.500'
    >
      Logo
    </Flex>
  )
}

export default Header
