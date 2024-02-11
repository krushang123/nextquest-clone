"use client"

import { Box, VStack, Heading, Text } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { ChevronRightIcon } from "@chakra-ui/icons"

const CustomizedExperienceSection = () => (
  <Box as='section' w='full' bgColor='#F1EAFF'>
    <Box bgColor='white' py={20} borderBottomRadius='10rem'>
      <VStack
        spacing={6}
        w='1210px'
        mx='auto'
        rounded='2rem'
        bgImage='url(/images/people-bg.png)'
        bgSize='cover'
        bgPosition='center'
        p={20}
        align='flex-start'
      >
        <Heading as='h2' fontSize='3xl' fontWeight='bold'>
          Want to know more?
        </Heading>

        <Text w='50%'>
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
