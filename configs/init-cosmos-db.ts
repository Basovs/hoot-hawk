import { CosmosClient } from "@azure/cosmos"

const client = new CosmosClient({
  endpoint: process.env.COSMOS_URL!,
  key: process.env.COSMOS_KEY!,
})

const database = client.database(process.env.DATABASE_ID!)
export const fileCollectionContainer = database.container(
  process.env.CONTAINER_ID!
)
