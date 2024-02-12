"use client"

import { Button } from "@chakra-ui/button"
import { Box, Heading, VStack } from "@chakra-ui/layout"
import { Link } from "@chakra-ui/next-js"

const HeroSection = () => (
  <Box as='section' w='full' px={{ base: 4, xl: 0 }} bgColor='primary.500'>
    <VStack
      spacing={10}
      w={{ base: "100%", xl: "1210px" }}
      mx='auto'
      py={20}
      color='white'
      textAlign='center'
    >
      <Heading
        as='h1'
        fontSize={{ base: "4xl", lg: "5xl", xl: "6xl" }}
        color='inherit'
        fontWeight='extrabold'
      >
        Boat Tour-Extended Dutch Bar
      </Heading>

      <Heading as='h2' fontSize='3xl' fontWeight='bold'>
        From €45 / person
      </Heading>

      <Link href='#contact-us'>
        <Button
          bgColor='white'
          color='primary.500'
          size='lg'
          _hover={{ bgColor: "white" }}
        >
          Get A Quick Quote
        </Button>
      </Link>
    </VStack>
  </Box>
)

export default HeroSection
