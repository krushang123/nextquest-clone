"use client"

import {
  Heading,
  VStack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/layout"
import { MdCheckCircle } from "react-icons/md"

interface FeatureListProps {
  title: string
  features: string[]
}

const FeatureList = (props: FeatureListProps) => {
  const { title, features } = props

  return (
    <VStack align='flex-start'>
      <Heading as='h2' fontSize='xl' fontWeight='bold'>
        {title}
      </Heading>

      <List spacing={3}>
        {features.map((feature) => (
          <ListItem key={feature} display='flex' alignItems='center' gap={2}>
            <ListIcon as={MdCheckCircle} boxSize={8} color='pink.500' />
            {feature}
          </ListItem>
        ))}
      </List>
    </VStack>
  )
}

const FeatureListGrid = () => (
  <SimpleGrid columns={2}>
    <FeatureList
      title='Includes'
      features={[
        "Dutch skipper",
        "Drink package: Dutch bar (beer/wine/soda’s) + 1 bottle of spirit pers 10 people",
      ]}
    />
    <FeatureList title='Must Have' features={["Great mood!"]} />
  </SimpleGrid>
)

export default FeatureListGrid
