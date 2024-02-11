"use client"

import { Box } from "@chakra-ui/layout"

import HeroSection from "@/components/hero-section"
import BoatTourDetailsSection from "@/components/boat-tour-details-section"
import ImageGallerySection from "@/components/image-gallery-section"

const IndexPage = () => (
  <Box w='full'>
    <HeroSection />
    <BoatTourDetailsSection />
    <ImageGallerySection />
  </Box>
)

export default IndexPage
