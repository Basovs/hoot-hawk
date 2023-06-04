import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"
import { useFormContext } from "react-hook-form"

interface Props {
  name: string
  label?: string
  placeholder?: string
  type?: string
}

export function InputWithLabel({
  name,
  label,
  type = "text",
  placeholder,
}: Props) {
  const { register } = useFormContext()
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </>
  )
}
