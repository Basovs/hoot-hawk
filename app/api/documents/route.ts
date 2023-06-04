import { CosmosClient } from "@azure/cosmos"
import { NextResponse } from "next/server"

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

export async function GET(_request: Request) {
  const { resources: file_collections } = await container.items
    .query(querySpec)
    .fetchAll()

  return NextResponse.json(
    { team: "Hoot & Hawk - All Documents", file_collections },
    { status: 200 }
  )
}
