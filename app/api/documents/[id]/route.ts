import { CosmosClient } from "@azure/cosmos"
import { NextResponse } from "next/server"

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  const fileId = context.params.id

  const client = new CosmosClient({
    endpoint: process.env.COSMOS_URL!,
    key: process.env.COSMOS_KEY!,
  })

  const database = client.database(process.env.DATABASE_ID!)
  const container = database.container(process.env.CONTAINER_ID!)

  const { resource: file } = await container
    .item(fileId, "file_collection_id")
    .read()

  // const { resources: file } = await container.items.query(querySpec).fetchAll()

  return NextResponse.json(
    { team: "Hoot & Hawk - Specific document", file_id: fileId, file },
    { status: 200 }
  )
}
