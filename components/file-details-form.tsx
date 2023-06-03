"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form"
import { InputWithLabel } from "./input-with-label"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function FileDetailsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputWithLabel form={form} name="supplier" label="Piegādātājs *" />
          <InputWithLabel form={form} name="reg_no" label="Reģ. Nr. *" />
          <InputWithLabel form={form} name="vat_nr" label="PVN Nr." />
          <InputWithLabel form={form} name="doc_nr" label="Dokumenta Nr. *" />
          <InputWithLabel form={form} name="currency" label="Valūta *" />
          <InputWithLabel form={form} name="vat_rate" label="PVN% *" />
          <InputWithLabel form={form} name="net" label="Netto *" />
          <InputWithLabel form={form} name="vat_sum" label="PVN *" />
          <InputWithLabel form={form} name="total_sum" label="Summa *" />
        </div>
      </form>
    </Form>
  )
}
