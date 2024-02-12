"use client"

import { Button } from "@chakra-ui/button"
import { Box, Heading, VStack } from "@chakra-ui/layout"

const HeroSection = () => (
  <Box as='section' w='full' bgColor='primary.500'>
    <VStack spacing={10} w='1210px' mx='auto' py={20} color='white'>
      <Heading as='h1' fontSize='6xl' color='inherit' fontWeight='extrabold'>
        Boat Tour-Extended Dutch Bar
      </Heading>

      <Heading as='h2' fontSize='3xl' fontWeight='bold'>
        From €45 / person
      </Heading>

      <Button
        bgColor='white'
        color='primary.500'
        size='lg'
        _hover={{ bgColor: "white" }}
      >
        Get A Quick Quote
      </Button>
    </VStack>
  </Box>
)

export default HeroSection
