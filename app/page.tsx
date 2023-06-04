import { Button } from "@/components/ui/button"
import { UploadFileForm } from "@/components/upload-file-form"
import { FileDetailsForm } from "@/components/file-details-form"
import FileColelctionList from "@/components/file-collection-list"
import { fileCollectionContainer } from "@/configs/init-cosmos-db"

// Query
const querySpec = {
  query: "SELECT * from database_id",
}

export default async function Home() {
  const { resources: fileCollections } = await fileCollectionContainer.items
    .query(querySpec)
    .fetchAll()

  return (
    <div className="flex h-full gap-10 w-full max-w-[700px] justify-between">
      <div className="w-full">
        <div className="flex justify-between gap-4 items-center flex-1 h-20">
          <p className="font-bold">All files</p>

          <a target="_blank" href="/api/documents">
            <Button variant="link" className="text-blue-500">
              API
            </Button>
          </a>
        </div>

        <UploadFileForm />

        <FileColelctionList fileCollections={fileCollections} />
      </div>

      <div className="w-[1px] bg-gray-900" />

      <div className="w-full">
        <div className="flex justify-between gap-4 items-center flex-1 h-20">
          <p className="font-bold">File details</p>

          <a target="_blank" href="/api/documents/1234567">
            <Button variant="link" className="text-blue-500">
              API
            </Button>
          </a>
        </div>

        <FileDetailsForm />
      </div>
    </div>
  )
}
