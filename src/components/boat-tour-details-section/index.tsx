"use client"

import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/next-js"

import InfoCardGrid from "./info-card-grid"
import FeatureListGrid from "./feature-list-grid"
import BackgroundShape from "./background-shape"

const BoatTourDetailsSection = () => (
  <Box as='section' w='full'>
    <Flex w='1210px' mx='auto'>
      <VStack w='50%' spacing={14} align='flex-start' py={20}>
        <VStack spacing={8} align='flex-start'>
          <Heading as='h2' fontSize='5xl' fontWeight='bold'>
            Boat Tour Adventure
          </Heading>

          <Text fontSize='lg' fontWeight='medium'>
            Experience unforgettable private Amsterdam boat tours with an open
            international bar, perfect for team building and corporate
            excursions. Enjoy the scenic views, indulge in refreshing drinks,
            and create lasting memories aboard our exclusive city canal cruise
            in Amsterdam. Book your team’s ultimate voyage today and set sail
            for an extraordinary experience that will leave everyone impressed
            and inspired!
          </Text>

          <InfoCardGrid />
        </VStack>

        <VStack spacing={8} align='flex-start'>
          <Heading as='h2' fontSize='2xl' fontWeight='bold'>
            What to Expect?
          </Heading>

          <Heading as='h2' fontSize='4xl' fontWeight='bold'>
            Boat Tours Amsterdam
          </Heading>

          <Text fontSize='lg' fontWeight='medium'>
            Embark on a delightful Amsterdam city canal cruise. To cruise the
            Amsterdam canal is the ultimate teambuilding activity. NextQuest
            offers the best Amsterdam boat adventures, fostering team bonds and
            enjoying a fantastic time together!
          </Text>

          <FeatureListGrid />
        </VStack>
      </VStack>

      <Flex w='50%' justify='flex-end' position='relative' py={10}>
        <BackgroundShape />

        <Box w='480px' h='633px' position='absolute' top={32} right='94px'>
          <Image
            priority
            fill
            src='/images/private-boat-tours-with-open-international-bar.png'
            alt='Private boat tours with open international bar'
            blurDataURL='/images/private-boat-tours-with-open-international-bar.png'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            rounded='2rem'
            sx={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>
      </Flex>
    </Flex>
  </Box>
)

export default BoatTourDetailsSection
