import { PaperclipIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface File {
  id: string
  file_name: string
}

interface FileCollection {
  id: string
  collection_name: string
  files: File[]
}

interface FileColelctionListProps {
  fileCollections: FileCollection[]
}

export default function FileColelctionList({
  fileCollections,
}: FileColelctionListProps) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {fileCollections.map((fileCollection) => (
        <FileCollection
          key={fileCollection.id}
          fileCollection={fileCollection}
        />
      ))}
    </div>
  )
}

interface FileCollectionProps {
  fileCollection: FileCollection
}

const FileCollection = ({ fileCollection }: FileCollectionProps) => {
  const { collection_name, files } = fileCollection

  return (
    <div className="px-4 py-2 rounded border flex justify-between items-center">
      <p>{collection_name}</p>

      <div className="flex items-center">
        {files.map((file) => {
          return (
            <TooltipProvider key={file.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="ghost">
                    <PaperclipIcon key={file.id} size={14} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{file.file_name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </div>
    </div>
  )
}
