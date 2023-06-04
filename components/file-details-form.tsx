"use client"

// import axios from "axios"
import { InputWithLabel } from "./input-with-label"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "./ui/button"

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

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputWithLabel name="supplier" label="Piegādātājs" />
          <InputWithLabel name="reg_no" label="Reģ. Nr." />
          <InputWithLabel name="vat_nr" label="PVN Nr." />
          <InputWithLabel name="doc_nr" label="Dokumenta Nr." />
          <InputWithLabel name="currency" label="Valūta" />
          <InputWithLabel name="vat_rate" label="PVN%" />
          <InputWithLabel name="net" label="Netto" />
          <InputWithLabel name="vat_sum" label="PVN" />
          <InputWithLabel name="total_sum" label="Summa" />
        </div>

        <Button type="submit">Saglabāt</Button>
      </form>
    </FormProvider>
  )
}
