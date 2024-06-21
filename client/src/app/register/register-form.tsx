"use client"

import * as React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import useSWR from "swr"

import { Button } from "durhack-web-components/ui/button"
import {
  ComboBox,
  ComboBoxButton,
  ComboBoxContent,
  ComboBoxTrigger
} from "durhack-web-components/ui/combobox"
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage
} from "durhack-web-components/ui/form"
import { Input } from "durhack-web-components/ui/input"
import { PhoneInput } from "durhack-web-components/ui/phone-number-input"

import "@/lib/zodExtensions"
import {siteConfig} from "@/config/site";

const registerFormSchema = z.object({
  firstNames: z.string().trim().min(1),
  lastNames: z.string().trim().min(1),
  age: z.coerce.number({ message: "Please provide a valid age." })
    .min(16, { message: "Age must be >= 16" })
    .max(256, { message: "Ain't no way you're that old." }),
  phoneNumber: z.string().phone().or(z.literal("")),
  email: z.string().email(),
  school: z.string(),
})

export function RegisterForm(props: React.HTMLAttributes<HTMLFormElement>) {
  const { data: schoolOptions } = useSWR(
    `${siteConfig.apiUrl}/verified-schools`,
    (...args) => fetch(...args).then(res => res.json())
  )

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstNames: "",
      lastNames: "",
      age: undefined,
      phoneNumber: "",
      email: "",
      school: undefined,
    }
  })

  async function onSubmit(values: z.infer<typeof registerFormSchema>): Promise<void> {

  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <FormField
          control={form.control}
          name="firstNames"
          render={({ field}) => (
            <FormItem>
              <FormLabel>First name(s)</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastNames"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name(s)</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input type="number" placeholder="18" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <PhoneInput
                  countrySelectProps={{ prominentCountries: new Set(["GB"]) }}
                  defaultCountry="GB"
                  placeholder="+44 1234 567890"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="abcd12@durham.ac.uk" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="school"
          render={({ field: {ref, ...field} } ) => (
            <FormItem className="flex flex-col">
              <FormLabel>Educational Institution</FormLabel>
              <ComboBox<string>
                placeholder="Select institution..."
                options={schoolOptions || []}
                prominentOptions={new Set("Durham University")}
                {...field}
              >
                <ComboBoxTrigger>
                  <FormControl>
                    <ComboBoxButton />
                  </FormControl>
                </ComboBoxTrigger>
                <ComboBoxContent />
              </ComboBox>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="default" className="w-full border border-input" type="submit">Register Interest</Button>
      </form>
    </Form>
  )
}
