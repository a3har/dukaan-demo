import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const requestParams = await request.json()
  return NextResponse.json({
    transactions: [
      {
        orderId: "9876",
        orderDate: new Date("2022-10-01"),
        amount: 150,
        fees: 15,
      },
      {
        orderId: "7654",
        orderDate: new Date("2022-09-15"),
        amount: 200,
        fees: 20,
      },
      {
        orderId: "5432",
        orderDate: new Date("2022-08-20"),
        amount: 175,
        fees: 17.5,
      },
      {
        orderId: "3210",
        orderDate: new Date("2022-07-05"),
        amount: 125,
        fees: 12.5,
      },
      {
        orderId: "2468",
        orderDate: new Date("2022-06-10"),
        amount: 180,
        fees: 18,
      },
      {
        orderId: "1357",
        orderDate: new Date("2022-05-25"),
        amount: 220,
        fees: 22,
      },
      {
        orderId: "8642",
        orderDate: new Date("2022-04-30"),
        amount: 195,
        fees: 19.5,
      },
      {
        orderId: "7531",
        orderDate: new Date("2022-03-15"),
        amount: 135,
        fees: 13.5,
      },
      {
        orderId: "6420",
        orderDate: new Date("2022-02-20"),
        amount: 160,
        fees: 16,
      },
      {
        orderId: "4293",
        orderDate: new Date("2022-01-05"),
        amount: 145,
        fees: 14.5,
      },
    ],
    total: 0,
  })
}
