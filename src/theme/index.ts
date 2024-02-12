import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { type Dict } from "@chakra-ui/utils"

import { styles } from "./style"
import { colors } from "./foundations/colors"
import { buttonTheme } from "./components/button"

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
    components: {
      Button: buttonTheme,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  }),
)

export default customTheme
