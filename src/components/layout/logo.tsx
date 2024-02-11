"use client"

import { Box } from "@chakra-ui/layout"
import { Image, Link } from "@chakra-ui/next-js"

const Logo = () => (
  <Link href='/'>
    <Box position='relative' w='227px' h='42px'>
      <Image
        priority
        fill
        src='/images/logo.png'
        alt='Nextquest Logo'
        blurDataURL='/images/logo.png'
      />
    </Box>
  </Link>
)

export default Logo
