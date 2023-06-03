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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function UploadFileForm() {
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
        <FormField
          control={form.control}
          name="username"
          render={({ field }: any) => (
            <FormItem className="flex gap-2 items-end -mt-1">
              <div>
                <FormLabel>File upload</FormLabel>
                <FormControl>
                  <Input
                    id="picture"
                    type="file"
                    placeholder="Select a file..."
                    {...field}
                  />
                </FormControl>
              </div>

              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                Upload
              </Button>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
