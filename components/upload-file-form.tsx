"use client"

import * as z from "zod"
import { FormProvider, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import InputMultipleFileUpload from "./input-multiple-file-upload"

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
    const { files } = formValues

    // 1. Normalizing payload for update AttachmentCollection without collection_file
    const payloadForNewAttachmentCollection = {}

    try {
      // // 2. Create AttachmentCollection without collection_files
      // const newAttachmentCollectionData: any = await createAttachmentCollection(
      //   payloadForNewAttachmentCollection
      // )
      // const newAttachmentCollection =
      //   newAttachmentCollectionData.data.createAttachmentCollection
      // const newAttachmentCollectionId = newAttachmentCollection.id
      // // 3. Normalize s3 files
      // const normalizedCollectionFiles = collection_files?.map((file) => {
      //   return {
      //     key: file.key || file.name, // we need to give a key. But on first creation there is no key so we create a key from name.
      //     url: `http://${process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET}.s3.amazonaws.com/${process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET}/${newAttachmentCollectionId}/${file.name}`,
      //     access_key: `${employee_id}/${newAttachmentCollectionId}/${file.name}`,
      //     name: file.name,
      //     size: file.size,
      //     bucket: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET || "",
      //     region: process.env.NEXT_PUBLIC_AWS_USER_FILES_S3_BUCKET_REGION || "",
      //   }
      // })
      // // 4. Payload for update AttachmentCollection with collection_file
      // const payloadForUpdateAttachmentCollection = {
      //   id: newAttachmentCollectionId,
      //   hours: newAttachmentCollection.hours,
      //   period_year: newAttachmentCollection.period_year,
      //   period_week: newAttachmentCollection.period_week,
      //   collection_files: normalizedCollectionFiles,
      //   type: "AttachmentCollection",
      // }
      // // 5. Update the empty AttachmentCollection by adding collection_files
      // updateAttachmentCollection(payloadForUpdateAttachmentCollection)
      // // 6. Upload files to S3
      // await Promise.all(
      //   collection_files!.map(async (file) => {
      //     await uploadFile(userId!, newAttachmentCollectionId, file as any)
      //   })
      // )
      // queryClient.invalidateQueries({
      //   queryKey: [EMPLOYEE_ATTACHMENT_COLLECTIONS],
      // })
      // handleOnSuccess && handleOnSuccess()
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
