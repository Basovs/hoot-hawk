import { Input } from "@/components/ui/input"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./react-hook-form/form"

interface Props {
  form: any
  name: string
  label?: string
  placeholder?: string
  type?: string
}

export function InputWithLabel({
  form,
  name,
  label,
  type = "text",
  placeholder,
}: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }: any) => (
        <FormItem>
          <div>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                {...field}
              />
            </FormControl>
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
