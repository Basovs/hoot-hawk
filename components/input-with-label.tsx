import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"

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
  return (
    <>
      <Label htmlFor="email">{label}</Label>
      <Input id={name} type={type} placeholder={placeholder} />
    </>
  )
}
