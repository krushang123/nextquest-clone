"use client"

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control"
import { Input, type InputProps as ChakraInputProps } from "@chakra-ui/input"
import {
  type FieldError,
  type UseFormRegister,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form"

interface FormControlInputProps<T extends FieldValues> {
  label: string
  name: Path<T>
  error?: FieldError
  register: UseFormRegister<T>
  registerOptions?: RegisterOptions<T, Path<T>>
  autoComplete?: ChakraInputProps["autoComplete"]
  placeholder: ChakraInputProps["placeholder"]
  isReadOnly?: ChakraInputProps["isReadOnly"]
  isDisabled?: ChakraInputProps["isDisabled"]
  helperText?: string
  textTransform?: ChakraInputProps["textTransform"]
  isRequired?: boolean
}

type InputProps<T extends FieldValues> = FormControlInputProps<T> &
  Omit<ChakraInputProps, "name">

const FormControlInput = <T extends FieldValues>(props: InputProps<T>) => {
  const {
    label,
    name,
    error,
    register,
    registerOptions,
    placeholder,
    helperText,
    autoComplete = "off",
    textTransform = "capitalize",
    isReadOnly = false,
    isDisabled = false,
    isRequired = false,
    ...restProps
  } = props

  return (
    <FormControl
      id={name}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isInvalid={!(error == null)}
    >
      <FormLabel htmlFor={name} textTransform={textTransform}>
        {label}
      </FormLabel>

      <Input
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(name, registerOptions)}
        {...restProps}
      />

      {helperText != null && <FormHelperText>{helperText}</FormHelperText>}

      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export default FormControlInput
