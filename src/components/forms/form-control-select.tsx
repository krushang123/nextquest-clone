"use client"

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control"
import {
  Select,
  type SelectProps as ChakraSelectProps,
} from "@chakra-ui/select"
import {
  type FieldError,
  type UseFormRegister,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form"

interface FormControlSelectProps<T extends FieldValues, OptionType> {
  label: string
  name: Path<T>
  error?: FieldError
  register: UseFormRegister<T>
  registerOptions?: RegisterOptions<T, Path<T>>
  autoComplete?: ChakraSelectProps["autoComplete"]
  placeholder: ChakraSelectProps["placeholder"]
  options?: OptionType[]
  valueKey: keyof OptionType
  labelKey: keyof OptionType
  isDisabled?: ChakraSelectProps["isDisabled"]
  helperText?: string
  isRequired?: boolean
}

type SelectProps<T extends FieldValues, OptionType> = FormControlSelectProps<
  T,
  OptionType
> &
  Omit<ChakraSelectProps, "name">

const FormControlSelect = <T extends FieldValues, OptionType>(
  props: SelectProps<T, OptionType>,
) => {
  const {
    label,
    name,
    error,
    register,
    registerOptions,
    options,
    placeholder,
    autoComplete = "off",
    isDisabled = false,
    helperText,
    valueKey,
    labelKey,
    isRequired = false,
    ...restProps
  } = props

  return (
    <FormControl
      id={name as string}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={!(error == null)}
    >
      <FormLabel
        htmlFor={name as string}
        textTransform='capitalize'
        _disabled={{
          opacity: 1,
        }}
      >
        {label}
      </FormLabel>

      <Select
        autoComplete={autoComplete}
        placeholder={placeholder}
        _disabled={{
          opacity: 1,
        }}
        {...register(name, registerOptions)}
        {...restProps}
      >
        {options?.map((option) => {
          const optionValue = option[valueKey] as string
          const optionLabel = option[labelKey] as string

          return (
            <option key={optionValue} value={optionValue}>
              {optionLabel}
            </option>
          )
        })}
      </Select>

      {helperText != null && <FormHelperText>{helperText}</FormHelperText>}

      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export default FormControlSelect
