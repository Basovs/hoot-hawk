import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UploadFileForm } from "@/components/upload-file-form"
import { FileDetailsForm } from "@/components/file-details-form"
import { CosmosClient } from "@azure/cosmos"
import FileColelctionList from "@/components/file-collection-list"

export default async function Home() {
  const client = new CosmosClient({
    endpoint: process.env.COSMOS_URL!,
    key: process.env.COSMOS_KEY!,
  })

  const database = client.database(process.env.DATABASE_ID!)
  const container = database.container(process.env.CONTAINER_ID!)

  // Query data
  const querySpec = {
    query: "SELECT * from database_id",
  }

  const { resources: fileCollections } = await container.items
    .query(querySpec)
    .fetchAll()

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

        <FileColelctionList fileCollections={fileCollections} />
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

        <FileDetailsForm />
      </div>
    </div>
  )
}
