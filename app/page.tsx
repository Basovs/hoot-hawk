import Link from "next/link"
import { InputWithLabel } from "@/components/input-with-label"
import { Button } from "@/components/ui/button"
import { UploadFileForm } from "@/components/upload-file-form"

export default function Home() {
  return (
    <div className="flex h-full gap-10 w-full max-w-[700px] justify-between">
      <div className="w-full">
        <div className="flex justify-between gap-4 items-center flex-1 h-20">
          <p className="font-bold">All files</p>

          <Link href="/api/documents">
            <Button variant="link" className="text-blue-500">
              API
            </Button>
          </Link>
        </div>

        <UploadFileForm />
      </div>

      <div className="w-[1px] bg-gray-900" />

      <div className="w-full">
        <div className="flex justify-between gap-4 items-center flex-1 h-20">
          <p className="font-bold">File details</p>

          <Link href="/api/documents/1234567">
            <Button variant="link" className="text-blue-500">
              API
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-2 *">
          <InputWithLabel label="Piegādātājs *" />
          <InputWithLabel label="Reģ. Nr. *" />
          <InputWithLabel label="PVN Nr." />
          <InputWithLabel label="Dokumenta Nr." />
          <InputWithLabel label="Valūta" />
          <InputWithLabel label="PVN%" />
          <InputWithLabel label="Netto" />
          <InputWithLabel label="PVN" />
          <InputWithLabel label="Summa" />
        </div>
      </div>
    </div>
  )
}
