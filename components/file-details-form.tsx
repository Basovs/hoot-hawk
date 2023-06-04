"use client"

// import axios from "axios"
import { InputWithLabel } from "./input-with-label"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { useFileCollectionStore } from "@/stores/use-file-collection-store"

export function FileDetailsForm() {
  const methods = useForm<any>({
    defaultValues: { files: [] },
  })

  const { handleSubmit, reset } = methods

  const onSubmit = async (formValues: any) => {
    console.log("formValues44 -> ", formValues)

    try {
      // await axios.post("http://20.121.55.74:5000/img_rec", formValues, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
    } catch (error) {
      console.error("Error submitting AttachmentCollection", error)
    }

    reset()
  }

  const { selectedFile } = useFileCollectionStore()

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputWithLabel
            name="supplier"
            label="Piegādātājs"
            value={selectedFile?.supplier}
          />
          <InputWithLabel
            name="reg_no"
            label="Reģ. Nr."
            value={selectedFile?.reg_no}
          />
          <InputWithLabel
            name="vat_nr"
            label="PVN Nr."
            value={selectedFile?.vat_nr}
          />
          <InputWithLabel
            name="doc_nr"
            label="Dokumenta Nr."
            value={selectedFile?.doc_nr}
          />
          <InputWithLabel
            name="currency"
            label="Valūta"
            value={selectedFile?.currency}
          />
          <InputWithLabel
            name="vat_rate"
            label="PVN%"
            value={selectedFile?.vat_rate}
          />
          <InputWithLabel name="net" label="Netto" value={selectedFile?.net} />
          <InputWithLabel
            name="vat_sum"
            label="PVN"
            value={selectedFile?.vat_sum}
          />
          <InputWithLabel
            name="total_sum"
            label="Summa"
            value={selectedFile?.total_sum}
          />
        </div>

        <Button type="submit">Saglabāt</Button>
      </form>
    </FormProvider>
  )
}
