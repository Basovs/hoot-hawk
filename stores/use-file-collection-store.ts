"use client"

import { FileCollection } from "@/components/file-collection-list"
import { create } from "zustand"

interface FileCollectionStoreType {
  selectedFileCollection: FileCollection | null
  setSelectedFileCollection: (fileCollection: FileCollection) => void
  removeSelectedFileCollection: () => void
}

export const useFileCollectionStore = create<FileCollectionStoreType>((set) => {
  return {
    selectedFileCollection: null,

    setSelectedFileCollection: (fileCollection) => {
      set(() => ({
        selectedFileCollection: fileCollection,
      }))
    },

    removeSelectedFileCollection: () => {
      set(() => ({ selectedFileCollection: null }))
    },
  }
})
