"use client"

import { Box } from "@chakra-ui/layout"

import HeroSection from "@/components/hero-section"
import BoatTourDetailsSection from "@/components/boat-tour-details-section"
import ImageGallerySection from "@/components/image-gallery-section"
import CustomizedExperienceSection from "@/components/customized-experience-section.tsx"
import RelatedToursSection from "@/components/related-tours-section"
import TrustedBySection from "@/components/trusted-by-section"

const IndexPage = () => (
  <Box w='full'>
    <HeroSection />
    <BoatTourDetailsSection />
    <ImageGallerySection />
    <CustomizedExperienceSection />
    <RelatedToursSection />
    <TrustedBySection />
  </Box>
)

export default IndexPage
