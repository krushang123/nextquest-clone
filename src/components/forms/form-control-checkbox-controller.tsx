import { type ChangeEvent } from "react"

import {
  Checkbox,
  type CheckboxGroupProps as CheckboxProps,
} from "@chakra-ui/checkbox"
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control"
import { type InputProps } from "@chakra-ui/input"
import {
  type Path,
  type FieldValues,
  type Control,
  type ControllerRenderProps,
  useController,
} from "react-hook-form"

interface FormControlCheckboxProps<T extends FieldValues> {
  label: string
  formLabel?: string
  name: Path<T>
  control: Control<T>
  isReadOnly?: boolean
  isRequired?: boolean
  textTransform?: InputProps["textTransform"]
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<T, Path<T>>,
  ) => void
}

type CheckboxGroupProps<T extends FieldValues> = FormControlCheckboxProps<T> &
  Omit<CheckboxProps, "name" | "onChange">

const FormControlCheckboxController = <T extends FieldValues>(
  props: CheckboxGroupProps<T>,
) => {
  const {
    label,
    name,
    control,
    isRequired = false,
    onChange,
    textTransform = "capitalize",
    isReadOnly = false,
    formLabel,
  } = props

  const { field, fieldState } = useController({
    name,
    control,
  })

  return (
    <FormControl
      as='fieldset'
      id={name}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isInvalid={fieldState.invalid}
    >
      {formLabel != null && (
        <FormLabel as='legend' htmlFor={name} textTransform={textTransform}>
          {formLabel}
        </FormLabel>
      )}

      <Checkbox
        id={name}
        isChecked={field.value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(event, field)
        }}
      >
        {label}
      </Checkbox>

      <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
    </FormControl>
  )
}

export default FormControlCheckboxController
