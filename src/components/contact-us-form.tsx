"use client"

import { ChangeEvent, useCallback } from "react"

import { VStack, SimpleGrid } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import {
  ControllerRenderProps,
  Path,
  SubmitHandler,
  UseFormProps,
  useForm,
} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

import FormControlInput from "./forms/form-control-input"
import FormControlSelect from "./forms/form-control-select"
import FormControlCheckboxController from "./forms/form-control-checkbox-controller"

interface ContactUsFormValues {
  name: string
  companyName: string
  email: string
  mobileNumber: string
  activity: string
  time?: string | undefined | null
  subscribe: boolean
}

type Option = {
  value: string
  label: string
}

const activityOptions: Option[] = [
  { value: "Baking Workshop", label: "Baking Workshop" },
  { value: "Balance Your Work & Life", label: "Balance Your Work & Life" },
  { value: "Boat Tour Dutch Bar", label: "Boat Tour Dutch Bar" },
  {
    value: "Boat Tour International Bar",
    label: "Boat Tour International Bar",
  },
  { value: "Bootcamp Fitness Class", label: "Bootcamp Fitness Class" },
  { value: "Chair Massages", label: "Chair Massages" },
  { value: "Cocktail Workshop", label: "Cocktail Workshop" },
  { value: "Comedy Improv", label: "Comedy Improv" },
  { value: "Culinary Workshop", label: "Culinary Workshop" },
  { value: "Darkweb Escape Room", label: "Darkweb Escape Room" },
  { value: "Digital Art", label: "Digital Art" },
  { value: "Drone Racing", label: "Drone Racing" },
  { value: "F1 Race Simulator", label: "F1 Race Simulator" },
  { value: "Grazing Platters", label: "Grazing Platters" },
  { value: "Guided Meditation", label: "Guided Meditation" },
  { value: "Haircuts", label: "Haircuts" },
  { value: "Immersive VR Experience", label: "Immersive VR Experience" },
  {
    value: "Intercultural Communication",
    label: "Intercultural Communication",
  },
  { value: "Kickboxing", label: "Kickboxing" },
  { value: "Lice Morning Routine", label: "Lice Morning Routine" },
  { value: "Live Energizer", label: "Live Energizer" },
  { value: "Manicures", label: "Manicures" },
  { value: "Master Your Time", label: "Master Your Time" },
  { value: "Murder Mystery", label: "Murder Mystery" },
  { value: "Office Mini Golf", label: "Office Mini Golf" },
  { value: "Paint & Sip", label: "Paint & Sip" },
  { value: "Photography", label: "Photography" },
  { value: "Pottery Workshop", label: "Pottery Workshop" },
  { value: "Public Speaking", label: "Public Speaking" },
  { value: "Santa's Rescue Quest", label: "Santa's Rescue Quest" },
  { value: "Sushi Workshop", label: "Sushi Workshop" },
  { value: "Tea Ceremony Pin Cha", label: "Tea Ceremony Pin Cha" },
  { value: "Tea Chocolate & Pairing", label: "Tea Chocolate & Pairing" },
  { value: "Tea Meditation", label: "Tea Meditation" },
  { value: "Techno Yoga", label: "Techno Yoga" },
  { value: "Treasure Hunt", label: "Treasure Hunt" },
  { value: "Virtual Escape Room", label: "Virtual Escape Room" },
  {
    value: "VR Airplane Teambuilding game",
    label: "VR Airplane Teambuilding game",
  },
  { value: "Yoga", label: "Yoga" },
  { value: "Zumba", label: "Zumba" },
]

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  companyName: Yup.string().trim().required("Company name is required."),
  email: Yup.string()
    .required("Email name is required.")
    .email("Email is invalid."),
  mobileNumber: Yup.string().trim().required("Mobile number is required."),
  activity: Yup.string().required("Activity is required."),
  time: Yup.string().notRequired(),
  subscribe: Yup.boolean().required(),
})

const formConfig: UseFormProps<ContactUsFormValues> = {
  defaultValues: {
    name: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    activity: "",
    time: "",
    subscribe: false,
  },
  resolver: yupResolver(schema),
  mode: "all",
}

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<ContactUsFormValues>(formConfig)

  const onSubmit: SubmitHandler<ContactUsFormValues> = async (data) => {
    console.log("🚀 ~  data:", data)

    reset()
  }

  const handleCheckedSubscribe = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      field: ControllerRenderProps<
        ContactUsFormValues,
        Path<ContactUsFormValues>
      >,
    ) => {
      field.onChange(event.target.checked)
    },
    [],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} w='full' spacing={10}>
          <FormControlInput<ContactUsFormValues>
            isRequired
            name='name'
            label='Name'
            placeholder='Enter your name'
            error={errors.name}
            register={register}
          />
          <FormControlInput<ContactUsFormValues>
            isRequired
            name='companyName'
            label='Company Name'
            placeholder='Enter your company name'
            error={errors.companyName}
            register={register}
          />
          <FormControlInput<ContactUsFormValues>
            isRequired
            type='email'
            name='email'
            label='Email'
            placeholder='Enter your email'
            error={errors.email}
            register={register}
          />
          <FormControlInput<ContactUsFormValues>
            isRequired
            name='mobileNumber'
            label='Mobile Number'
            placeholder='Enter your mobile number'
            error={errors.mobileNumber}
            register={register}
          />
        </SimpleGrid>

        <FormControlSelect<ContactUsFormValues, Option>
          isRequired
          label='Activity'
          name='activity'
          placeholder='Please select activity type'
          options={activityOptions}
          labelKey='label'
          valueKey='value'
          register={register}
          error={errors.activity}
        />

        <FormControlInput<ContactUsFormValues>
          name='time'
          label='Special Requests/Time/Promo code'
          placeholder='Enter your special request'
          error={errors.time}
          register={register}
        />

        <FormControlCheckboxController<ContactUsFormValues>
          isRequired
          name='subscribe'
          formLabel='Subscribe to our newsletter'
          control={control}
          label=' I like to stay up to date of any news and special discounts.'
          onChange={handleCheckedSubscribe}
        />

        <Button
          ml={{ md: "auto" }}
          type='submit'
          w={{ base: "full", md: "unset" }}
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </VStack>
    </form>
  )
}

export default ContactUsForm
