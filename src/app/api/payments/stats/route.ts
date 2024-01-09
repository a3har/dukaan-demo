import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  return NextResponse.json({
    stats: [
      {
        stat: "online-orders",
        label: "Online orders",
        value: 231,
        type: "integer",
      },
      {
        stat: "amount-received",
        label: "Amount received",
        value: "2392312.19",
        type: "currency",
      },
    ],
  })
}
