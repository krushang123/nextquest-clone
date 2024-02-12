"use client"

import { Box, SimpleGrid } from "@chakra-ui/layout"

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
      w='full'
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
  <Box as='section' w='full' px={{ base: 4, xl: 0 }}>
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 4 }}
      spacing={6}
      w={{ base: "100%", xl: "1210px" }}
      mx='auto'
    >
      {galleryImages.map((image) => (
        <ImageGalleryItem key={image} imageSrc={image} />
      ))}
    </SimpleGrid>
  </Box>
)

export default ImageGallerySection
