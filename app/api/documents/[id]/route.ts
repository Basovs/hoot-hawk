import { NextResponse } from "next/server"

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  const documentId = context.params.id

  return NextResponse.json(
    { team: "Hoot & Hawk - Specific document", document_id: documentId },
    { status: 200 }
  )
}
