"use client"

import { Box, HStack } from "@chakra-ui/layout"

interface ImageGalleryItemProps {
  imageSrc: string
}

const galleryImages: string[] = [
  "/images/boat-tour.webp",
  "/images/boat-tour-3.webp",
  "/images/boat-tour-2.webp",
]

const ImageGalleryItem = (props: ImageGalleryItemProps) => {
  const { imageSrc } = props

  return (
    <Box
      w='320px'
      h='380px'
      bgImage={`url(${imageSrc})`}
      rounded='2rem'
      bgSize='cover'
      bgPosition='center'
      border='16px solid #FBE8EF'
    />
  )
}

const ImageGallerySection = () => (
  <Box as='section' w='full'>
    <HStack spacing={6} w='1210px' mx='auto'>
      {galleryImages.map((image) => (
        <ImageGalleryItem key={image} imageSrc={image} />
      ))}
    </HStack>
  </Box>
)

export default ImageGallerySection
