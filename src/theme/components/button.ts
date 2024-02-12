import { defineStyle, type ComponentStyleConfig } from "@chakra-ui/react"

const baseStyle = defineStyle({
  fontWeight: "medium",
})

export const buttonTheme: ComponentStyleConfig = {
  baseStyle,
  defaultProps: {
    variant: "solid",
    size: "md",
  },
}
