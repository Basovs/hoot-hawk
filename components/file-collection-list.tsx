"use client"

import { PaperclipIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useFileCollectionStore } from "@/stores/use-file-collection-store"

export interface File {
  id: string
  file_name: string
  supplier: string
  reg_no: string
  vat_nr: string
  doc_nr: string
  currency: string
  vat_rate: string
  net: string
  vat_sum: string
  total_sum: string
}

export interface FileCollection {
  id: string
  created_at: string
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
      {fileCollections.map((fileCollection, i) => (
        <FileCollection key={i} fileCollection={fileCollection} />
      ))}
    </div>
  )
}

interface FileCollectionProps {
  fileCollection: FileCollection
}

const FileCollection = ({ fileCollection }: FileCollectionProps) => {
  const { created_at, files } = fileCollection

  const { setSelectedFileCollection, setSelectedFile, selectedFile } =
    useFileCollectionStore()

  const handleClickOnFileCollection = (
    clickedFileCollection: FileCollection
  ) => {
    setSelectedFileCollection(clickedFileCollection)

    if (
      !clickedFileCollection.files.some((file) => file.id === selectedFile?.id)
    ) {
      setSelectedFile(null)
    }
  }

  const handleClickOnFile = (
    event: React.MouseEvent,
    newFile: File,
    clickedFileCollection: FileCollection
  ) => {
    event.stopPropagation()
    setSelectedFile(newFile)
    setSelectedFileCollection(clickedFileCollection)
  }

  return (
    <div
      onClick={() => handleClickOnFileCollection(fileCollection)}
      className="px-4 py-2 rounded border flex justify-between items-center"
    >
      <p>{created_at}</p>

      <div className="flex items-center">
        {files.map((file, i) => {
          return (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(event) =>
                    handleClickOnFile(event, file, fileCollection)
                  }
                >
                  <PaperclipIcon key={file.id} size={14} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{file.file_name}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}
