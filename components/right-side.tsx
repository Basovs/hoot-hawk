"use client"

import { useFileCollectionStore } from "@/stores/use-file-collection-store"
import { FileDetailsForm } from "./file-details-form"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { PaperclipIcon } from "lucide-react"

export default function RightSide() {
  const { selectedFileCollection, selectedFile, setSelectedFile } =
    useFileCollectionStore()

  return (
    <>
      {selectedFileCollection ? (
        <>
          <div className="flex justify-between gap-4 items-center flex-1 h-20">
            <p className="font-bold">Faila dati</p>

            {/* {selectedFile ? (
              <a target="_blank" href={`/api/documents/file_collection_3`}>
                <Button variant="link" className="text-blue-500">
                  API
                </Button>
              </a>
            ) : null} */}
          </div>

          <div className="mb-2">
            {selectedFileCollection.files.map((file) => (
              <Tooltip key={file.id}>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedFile(file)}
                  >
                    <PaperclipIcon key={file.id} size={14} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{file.file_name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* {selectedFile ? <FileDetailsForm /> : null} */}
        </>
      ) : null}
    </>
  )
}
