import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { type Dict } from "@chakra-ui/utils"

import { styles } from "./style"
import { colors } from "./foundations/colors"

const customTheme: Dict = extendTheme(
  {
    styles,
    colors,
    fonts: {
      heading: "'Lexend Deca', sans-serif",
      body: "'Lexend Deca', sans-serif",
    },
  },
  {
    components: {},
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  }),
)

export default customTheme
