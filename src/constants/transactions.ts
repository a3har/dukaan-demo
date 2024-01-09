"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Transaction = {
  orderId: string
  orderDate: Date
  amount: number
  fees: number
}

export const TRANSACTION_FIELDS: ColumnDef<Transaction>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "orderDate",
    header: "Order Date",
  },
  {
    accessorKey: "amount",
    header: "Order Amount",
  },
  {
    accessorKey: "fees",
    header: "Transaction Fees",
  },
]
