"use client"

import { Box, Flex, VStack, Text, Heading } from "@chakra-ui/layout"
import { Link } from "@chakra-ui/next-js"

import Logo from "./logo"

interface Item {
  label: string
  url: string
}

interface SectionWithItemsProps {
  title: string
  items: Item[]
}

const servingInItems: Item[] = [{ label: "Amsterdam", url: "/" }]

const menuItems: Item[] = [
  { label: "Beauty & Wellness", url: "/" },
  { label: "Workshops", url: "/" },
  { label: "Entertainment", url: "/" },
  { label: "masterclass", url: "/" },
]

const connectItems: Item[] = [
  { label: "Linkedin", url: "/" },
  { label: "Instagram", url: "/" },
  { label: "Facebook", url: "/" },
  { label: "Email", url: "/" },
]

const SectionWithItems = (props: SectionWithItemsProps) => {
  const { title, items } = props

  return (
    <VStack spacing={4} align='flex-start'>
      <Heading as='h2' fontSize='1rem'>
        {title}
      </Heading>

      {items.map((item) => (
        <Link href={item.url} key={item.label}>
          <Text as='span'>{item.label}</Text>
        </Link>
      ))}
    </VStack>
  )
}

const Footer = () => (
  <Box
    as='footer'
    maxW='100vw'
    px={{ base: 4, xl: 0 }}
    py={20}
    bgColor='primary.500'
    color='white'
    borderBottom='1px solid white'
  >
    <VStack w={{ base: "100%", xl: "1210px" }} h='full' mx='auto' spacing={16}>
      <Flex
        w='full'
        direction={{ base: "column", md: "row" }}
        justifyContent='space-between'
        align='flex-start'
        gap={10}
      >
        <VStack spacing={4} align='flex-start'>
          <Logo />
          <Text>NextQuest offers team building activities for your team!</Text>
          <Text>Krommehoekstraat 12, 1104 KV Amsterdam</Text>
        </VStack>

        <SectionWithItems title='Serving In' items={servingInItems} />
        <SectionWithItems title='Menu' items={menuItems} />
        <SectionWithItems title='Connect' items={connectItems} />
      </Flex>

      <Flex
        direction={{ base: "column", lg: "row" }}
        w='full'
        justify='space-between'
        textAlign='center'
        gap={4}
        fontSize='small'
      >
        <Text>Built with ❤️ by cuties of NextQuest</Text>
        <Text>Copyright © 2024. NextQuest. All rights reserved.</Text>
      </Flex>
    </VStack>
  </Box>
)

export default Footer
