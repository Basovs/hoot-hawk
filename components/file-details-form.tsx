import { InputWithLabel } from "./input-with-label"

export function FileDetailsForm() {
  return (
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
  )
}
