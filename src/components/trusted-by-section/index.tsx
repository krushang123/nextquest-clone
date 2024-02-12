"use client"

import { Box, VStack, Heading } from "@chakra-ui/layout"
import CompanyLogosGrid from "./company-logos-grid"
import ContactUsForm from "../contact-us-form"

const TrustedBySection = () => (
  <Box as='section' w='full' px={{ base: 4, xl: 0 }}>
    <VStack spacing={10} w={{ base: "100%", xl: "1210px" }} mx='auto' py={20}>
      <Heading as='h1' fontSize='2xl' fontWeight='bold'>
        Trusted by
      </Heading>

      <CompanyLogosGrid />

      <Box w='full' id='contact-us'>
        <ContactUsForm />
      </Box>
    </VStack>
  </Box>
)

export default TrustedBySection
