"use client"

import { Box, VStack, Heading, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { ChevronRightIcon } from "@chakra-ui/icons"

const CustomizedExperienceSection = () => (
  <Box as='section' w='full' bgColor='#F1EAFF'>
    <Box
      bgColor='white'
      py={20}
      borderBottomRadius={{ base: "3rem", md: "10rem" }}
      display='flex'
      justifyContent='center'
    >
      <VStack
        spacing={6}
        w={{ base: "90%", xl: "1210px" }}
        mx='auto'
        rounded='2rem'
        bgImage='url(/images/people-bg.png)'
        bgSize='cover'
        bgPosition='center'
        p={{ base: 4, md: 20 }}
        align={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "unset" }}
      >
        <Heading as='h2' fontSize='3xl' fontWeight='bold'>
          Want to know more?
        </Heading>

        <Text w={{ md: "50%" }}>
          Let us know and we will customize the experience specifically for your
          Team needs!
        </Text>

        <Button
          size='lg'
          rightIcon={<ChevronRightIcon boxSize={8} />}
          color='#DC3C7C'
          bgColor='white'
          _hover={{
            bgColor: "white",
          }}
        >
          Get A Quick Quote
        </Button>
      </VStack>
    </Box>
  </Box>
)

export default CustomizedExperienceSection
