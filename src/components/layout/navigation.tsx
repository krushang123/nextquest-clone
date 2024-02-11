"use client"

import { Box, Text } from "@chakra-ui/layout"
import { List, ListItem } from "@chakra-ui/react"
import Link from "next/link"

interface NavigationItem {
  label: string
  link: string
}

interface NavigationListProps {
  items: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
  { label: "Wellness", link: "/" },
  { label: "Workshops", link: "/" },
  { label: "Entertainment", link: "/" },
  { label: "Masterclass", link: "/" },
  { label: "Virtual", link: "/" },
  { label: "Bundles", link: "/" },
  { label: "About Us", link: "/" },
  { label: "Blog", link: "/" },
]

const NavigationList = (props: NavigationListProps) => {
  const { items } = props

  return (
    <List
      display='flex'
      w='1210px'
      h='full'
      justifyContent='space-between'
      alignItems='center'
      mx='auto'
    >
      {items.map((item) => (
        <ListItem key={item.label}>
          <Link href={item.link}>
            <Text as='span' fontWeight='bold' textTransform='uppercase'>
              {item.label}
            </Text>
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

const Navigation = () => (
  <Box
    as='nav'
    h={85}
    maxW='100vw'
    pos='sticky'
    top={0}
    right={0}
    left={0}
    zIndex='sticky'
    bgColor='primary.500'
    color='white'
  >
    <NavigationList items={navigationItems} />
  </Box>
)

export default Navigation
