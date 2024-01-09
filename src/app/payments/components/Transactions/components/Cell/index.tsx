import React from "react"
import { CellContext } from "@tanstack/react-table"

import { Transaction } from "@/constants/transactions"
import FieldValue from "@/components/FieldValue"

export default function TransactionCell({
  row,
  column,
}: CellContext<Transaction, unknown>) {
  const {
    original: { amount, fees, orderDate, orderId },
  } = row
  const {
    // @ts-ignore
    columnDef: { accessorKey },
  } = column

  let Content

  switch (accessorKey) {
    case "orderId":
      Content = (
        <a
          href="https://dukaan.io"
          target="_blank"
          className="text-primary-blue font-medium hover:underline underline-offset-4 cursor-pointer"
        >
          #{orderId}
        </a>
      )
      break
    case "orderDate":
      Content = <FieldValue type="timestamp" value={orderDate} />
      break
    case "amount":
      Content = <FieldValue type="currency" value={amount} />
      break
    case "fees":
      Content = <FieldValue type="currency" value={fees} />
      break
  }
  return <div className="">{Content}</div>
}
