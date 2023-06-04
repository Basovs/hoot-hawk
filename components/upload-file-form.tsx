"use client"

import * as z from "zod"
import { FormProvider, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import InputMultipleFileUpload from "./input-multiple-file-upload"
import axios from "axios"

const S3ObjectType = z.object({
  __typename: z.literal("S3File"),
  bucket: z.string(),
  region: z.string(),
  access_key: z.string(),
  name: z.string(),
  size: z.number(),
  key: z.string(),
  url: z.string(),
})

const validationSchema = z.object({
  id: z.string().optional(),
  files: z.array(S3ObjectType).nullable().optional(),
})

type S3FileInput = {
  bucket: string
  region: string
  key: string
  url: string
  access_key: string
  name: string
  size: number
}

type CreateAttachmentCollectionInput = {
  id?: string | null
  files?: Array<S3FileInput | null> | null
}

type FormValues = z.infer<typeof validationSchema>

export function UploadFileForm() {
  const methods = useForm<FormValues>({
    defaultValues: { files: [] },
  })

  const { handleSubmit, reset, watch, setValue } = methods

  // const form = useForm<z.infer<typeof FormSchema>>({
  //   resolver: zodResolver(FormSchema),
  // })

  const onSubmit = async (formValues: CreateAttachmentCollectionInput) => {
    console.log("formValues666 -> ", formValues)

    try {
      console.log("BEFORE POST -> ")
      await axios.post("http://20.121.55.74:5000/img_rec", formValues, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log("AFTER POST -> ")
    } catch (error) {
      console.error("Error submitting AttachmentCollection", error)
    }

    reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 items-end -mt-1">
          <InputMultipleFileUpload />

          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 w-full"
          >
            Augšuplādēt
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
