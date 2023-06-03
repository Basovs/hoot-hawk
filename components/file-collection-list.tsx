interface FileCollection {
  id: string
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
  const { id } = fileCollection

  return (
    <div className="p-4 rounded border">
      <p>{id}</p>
    </div>
  )
}
