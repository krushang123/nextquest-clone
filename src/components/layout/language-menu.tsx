"use client"

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/button"
import { Box } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/next-js"

const languages = [
  { code: "eng", label: "ENG", flag: "/images/eng-flag.png" },
  { code: "nl", label: "NL", flag: "/images/nl-flag.png" },
]

const LanguageMenu = () => (
  <Menu>
    <MenuButton variant='unstyled' as={Button} rightIcon={<ChevronDownIcon />}>
      ENG
    </MenuButton>

    <MenuList color='black'>
      {languages.map((lang) => (
        <MenuItem key={lang.code}>
          <Box position='relative' w='16px' h='11px' mr='12px'>
            <Image
              priority
              fill
              src={lang.flag}
              alt={`${lang.label} Flag`}
              blurDataURL={lang.flag}
            />
          </Box>
          <span>{lang.label}</span>
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
)

export default LanguageMenu
