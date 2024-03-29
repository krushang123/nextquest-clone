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

export const NavigationList = (props: NavigationListProps) => {
  const { items } = props

  return (
    <List
      display='flex'
      w={{ base: "100%", xl: "1210px" }}
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
    px={{ base: 4, xl: 0 }}
    maxW='100vw'
    bgColor='primary.500'
    color='white'
  >
    <NavigationList items={navigationItems} />
  </Box>
)

export default Navigation
