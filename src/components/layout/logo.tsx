"use client"

import { Box } from "@chakra-ui/layout"
import { Image, Link } from "@chakra-ui/next-js"

const Logo = () => (
  <Link href='/'>
    <Box
      position='relative'
      w={{ base: "157px", sm: "227px" }}
      h={{ base: "29px", sm: "42px" }}
    >
      <Image
        priority
        fill
        src='/images/logo.png'
        alt='Nextquest Logo'
        blurDataURL='/images/logo.png'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        sx={{ objectFit: "cover", objectPosition: "center" }}
      />
    </Box>
  </Link>
)

export default Logo
