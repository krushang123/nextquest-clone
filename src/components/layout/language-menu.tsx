"use client"

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/button"
import { Box } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/next-js"

interface Language {
  code: string
  label: string
  flag: string
}

interface LanguageMenuItemProps {
  language: Language
}

const languages: Language[] = [
  { code: "eng", label: "ENG", flag: "/images/eng-flag.png" },
  { code: "nl", label: "NL", flag: "/images/nl-flag.png" },
]

const LanguageMenuItem = (props: LanguageMenuItemProps) => {
  const { language } = props

  return (
    <MenuItem key={language.code}>
      <Box position='relative' w='16px' h='11px' mr='12px'>
        <Image
          priority
          fill
          src={language.flag}
          alt={`${language.label} Flag`}
          blurDataURL={language.flag}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          sx={{ objectFit: "cover", objectPosition: "center" }}
        />
      </Box>

      <span>{language.label}</span>
    </MenuItem>
  )
}

const LanguageMenu = () => (
  <Menu>
    <MenuButton variant='unstyled' as={Button} rightIcon={<ChevronDownIcon />}>
      ENG
    </MenuButton>

    <MenuList color='black'>
      {languages.map((language) => (
        <LanguageMenuItem key={language.code} language={language} />
      ))}
    </MenuList>
  </Menu>
)

export default LanguageMenu
