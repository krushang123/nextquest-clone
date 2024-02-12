"use client"

import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/next-js"
import { useBreakpointValue } from "@chakra-ui/react"

import InfoCardGrid from "./info-card-grid"
import FeatureListGrid from "./feature-list-grid"
import BackgroundShape from "./background-shape"

const BoatTourDetailsSection = () => {
  const isTablet = Boolean(
    useBreakpointValue({ base: false, md: true }, { ssr: true }),
  )

  return (
    <Box as='section' w='full' px={{ base: 4, xl: 0 }}>
      <Flex
        w={{ base: "100%", xl: "1210px" }}
        direction={{ base: "column-reverse", xl: "row" }}
        mx='auto'
      >
        <VStack
          w={{ base: "full", xl: "50%" }}
          spacing={14}
          align='flex-start'
          py={{ base: 10, xl: 20 }}
        >
          <VStack spacing={8} align='flex-start'>
            <Heading
              as='h2'
              fontSize={{ base: "3xl", xl: "5xl" }}
              fontWeight='bold'
            >
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
              offers the best Amsterdam boat adventures, fostering team bonds
              and enjoying a fantastic time together!
            </Text>

            <FeatureListGrid />
          </VStack>
        </VStack>

        <Flex
          w={{ base: "full", xl: "50%" }}
          justify={{ md: "flex-end" }}
          position='relative'
          justifyContent={{ base: "center", xl: "unset" }}
          alignItems={{ base: "center", xl: "unset" }}
          py={10}
          ml={{ xl: 10 }}
        >
          {isTablet && <BackgroundShape />}

          <Box
            w={{ base: "290px", md: "480px" }}
            h={{ base: "375px", md: "633px" }}
            position={{ base: "relative", md: "absolute" }}
            top={{ md: 32 }}
            right={{ xl: "94px" }}
            left={{ md: "94px", xl: 0 }}
          >
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
}

export default BoatTourDetailsSection
