"use client"

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/next-js"

interface InfoCard {
  icon: string
  title: string
  content: string
  colSpan: number
}

interface InfoCardProps {
  infoCard: InfoCard
}

const infoCards: InfoCard[] = [
  {
    icon: "/images/clock.png",
    title: "Duration",
    content: "1 hrs 30 mins",
    colSpan: 1,
  },
  {
    icon: "/images/people.png",
    title: "Team Size",
    content: "Min 10 Max 40",
    colSpan: 1,
  },
  {
    icon: "/images/talking.png",
    title: "Language",
    content: "English, Dutch",
    colSpan: 1,
  },
  {
    icon: "/images/puzzle.png",
    title: "Activity option",
    content: "Outside the office",
    colSpan: 1,
  },
  {
    icon: "/images/archery.png",
    title: "Goals",
    content: "Inspiration, Creativity, Mental & physical wellbeing, gratitude",
    colSpan: 2,
  },
]

const InfoCard = (props: InfoCardProps) => {
  const { infoCard } = props

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={6}
      px={6}
      py={4}
      border='1px solid #FAE2EB'
      rounded='2xl'
    >
      <Box w='40px' h='40px' position='relative'>
        <Image
          priority
          fill
          src={infoCard.icon}
          alt={infoCard.title}
          blurDataURL={infoCard.icon}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          sx={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Box>

      <VStack align='flex-start'>
        <Heading as='h3' fontSize='md' fontWeight='semibold'>
          {infoCard.title}
        </Heading>

        <Text fontWeight='semibold'>{infoCard.content}</Text>
      </VStack>
    </Stack>
  )
}

const InfoCardGrid = () => (
  <Grid
    w='full'
    templateRows='repeat(3, 1fr)'
    templateColumns='repeat(2, 1fr)'
    columnGap={5}
    rowGap={5}
  >
    {infoCards.map((infoCard) => (
      <GridItem colSpan={infoCard.colSpan} key={infoCard.title}>
        <InfoCard infoCard={infoCard} />
      </GridItem>
    ))}
  </Grid>
)

export default InfoCardGrid
