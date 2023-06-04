"use client"

import { File, FileCollection } from "@/components/file-collection-list"
import { create } from "zustand"

interface FileCollectionStoreType {
  selectedFileCollection: FileCollection | null
  setSelectedFileCollection: (fileCollection: FileCollection | null) => void
  removeSelectedFileCollection: () => void

  selectedFile: File | null
  setSelectedFile: (fileCollection: File | null) => void
  removeSelectedFile: () => void
}

export const useFileCollectionStore = create<FileCollectionStoreType>((set) => {
  return {
    selectedFileCollection: null,
    setSelectedFileCollection: (newFileCollection) => {
      set(() => ({
        selectedFileCollection: newFileCollection,
      }))
    },
    removeSelectedFileCollection: () => {
      set(() => ({ selectedFileCollection: null }))
    },

    selectedFile: null,
    setSelectedFile: (file) => {
      set(() => ({
        selectedFile: file,
      }))
    },
    removeSelectedFile: () => {
      set(() => ({ selectedFile: null }))
    },
  }
})
