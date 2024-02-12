"use client"

import { Box, SimpleGrid, Heading, VStack, Flex, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/next-js"

interface TourCard {
  imageSrc: string
  alt: string
  title: string
  price: string
  duration: string
}

interface TourCardProps {
  tour: TourCard
}

const tourData: TourCard[] = [
  {
    title: "Boat Tour-Extended Dutch Bar",
    price: "From €45 / person",
    duration: "1 hrs 30 min",
    imageSrc: "/images/private-boat-tours-with-open-international-bar.png",
    alt: "Private boat tours with open international bar",
  },
  {
    title: "Boat Tour-Dutch Bar",
    price: "From €38 / person",
    duration: "1 hrs 30 min",
    imageSrc: "/images/boat-tour-2.webp",
    alt: "Boat tour",
  },
  {
    title: "Treasure Hunt",
    price: "From €36 / person",
    duration: "2 hrs",
    imageSrc: "/images/treasure-hunt.jpg",
    alt: "Treasure Hunt",
  },
]

const TourCard = (props: TourCardProps) => {
  const { tour } = props

  return (
    <VStack spacing={4} align='flex-start'>
      <Box w='full' h='460px' position='relative'>
        <Image
          priority
          fill
          src={tour.imageSrc}
          alt={tour.alt}
          blurDataURL={tour.imageSrc}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          rounded='2rem'
          sx={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Box>

      <Heading as='h2' fontSize='3xl' noOfLines={1}>
        {tour.title}
      </Heading>

      <Flex w='full' justify='space-between'>
        <Heading as='h2' fontSize='md' fontWeight='semibold' color='#707171'>
          {tour.price}
        </Heading>

        <Text fontWeight='semibold' color='#8C52FF'>
          {tour.duration}
        </Text>
      </Flex>
    </VStack>
  )
}

const RelatedToursSection = () => (
  <Box as='section' w='full' bgColor='#F1EAFF' py={20} px={{ base: 4, xl: 0 }}>
    <VStack
      spacing={14}
      align='flex-start'
      w={{ base: "100%", xl: "1210px" }}
      mx='auto'
    >
      <Heading fontSize='5xl' fontWeight='bold'>
        You may also like
      </Heading>

      <SimpleGrid w='full' columns={{ base: 1, md: 2, xl: 3 }} spacing={12}>
        {tourData.map((tour) => (
          <TourCard key={tour.title} tour={tour} />
        ))}
      </SimpleGrid>
    </VStack>
  </Box>
)

export default RelatedToursSection
