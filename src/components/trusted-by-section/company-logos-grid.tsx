"use client"

import { Box, SimpleGrid } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/next-js"

interface CompanyLogo {
  src: string
  alt: string
  blurDataURL: string
}

interface CompanyLogoProps {
  logo: CompanyLogo
}

export const companyLogos: CompanyLogo[] = [
  {
    src: "/images/datadog-logo.png",
    alt: "Datadog logo",
    blurDataURL: "/images/datadog-logo.png",
  },
  {
    src: "/images/monday-logo.png",
    alt: "Monday.com logo",
    blurDataURL: "/images/monday-logo.png",
  },
  {
    src: "/images/we-work-logo.png",
    alt: "We Work logo",
    blurDataURL: "/images/we-work-logo.png",
  },
  {
    src: "/images/salto-logo.png",
    alt: "Salto logo",
    blurDataURL: "/images/salto-logo.png",
  },
  {
    src: "/images/amsterdam-data-collective-logo.png",
    alt: "Amsterdam data collective logo",
    blurDataURL: "/images/amsterdam-data-collective-logo.png",
  },
  {
    src: "/images/booking-logo.jpg",
    alt: "Booking.com logo",
    blurDataURL: "/images/booking-logo.jpg",
  },
  {
    src: "/images/the-social-hub-logo.png",
    alt: "The social hub logo",
    blurDataURL: "/images/the-social-hub-logo.png",
  },
  {
    src: "/images/spaces-logo.png",
    alt: "Spaces logo",
    blurDataURL: "/images/spaces-logo.png",
  },
  {
    src: "/images/danone-logo.png",
    alt: "Danone logo",
    blurDataURL: "/images/danone-logo.png",
  },
]

const CompanyLogo = (props: CompanyLogoProps) => {
  const { logo } = props

  return (
    <Box w='full' h='70px' position='relative'>
      <Image
        fill
        src={logo.src}
        alt={logo.alt}
        blurDataURL={logo.blurDataURL}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        sx={{ objectFit: "cover", objectPosition: "center" }}
      />
    </Box>
  )
}

const CompanyLogosGrid = () => (
  <SimpleGrid w='full' columns={6} gap={14}>
    {companyLogos.map((logo) => (
      <CompanyLogo key={logo.src} logo={logo} />
    ))}
  </SimpleGrid>
)

export default CompanyLogosGrid
