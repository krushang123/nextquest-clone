"use client"

import { Box } from "@chakra-ui/layout"

import HeroSection from "@/components/hero-section"
import BoatTourDetailsSection from "@/components/boat-tour-details-section"

const IndexPage = () => (
  <Box w='full'>
    <HeroSection />
    <BoatTourDetailsSection />
  </Box>
)

export default IndexPage
