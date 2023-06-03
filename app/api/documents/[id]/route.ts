import { NextResponse } from "next/server"

export async function GET(_request: Request, context: { params: any }) {
  return NextResponse.json(
    { team: "Hoot & Hawk - Specific document", context: context },
    { status: 200 }
  )
}
