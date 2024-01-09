import React from "react"
import { useQuery } from "@tanstack/react-query"

import api from "@/clients/api"
import { Download, Search, Sort } from "@/components/Icons"
import Button from "@/components/Button"
import { DataTable } from "@/components/DataTable"
import { TRANSACTION_FIELDS } from "@/constants/transactions"
import WaitForQueries from "@/components/WaitForQueries"

export default function Transactions() {
  const transactionQuery = useQuery({
    queryKey: ["transactions"],
    queryFn: () => {
      return api.post("api/payments/transactions", {}, {})
    },
  })

  const data = transactionQuery.data?.transactions

  return (
    <div className="flex flex-col w-full">
      <h4 className="text-xl font-medium text-black-12">Transactions</h4>
      <div className="shadow-table p-3 bg-white rounded-lg mt-5">
        <div className="flex flex-row items-center justify-between">
          <div className="px-4 py-2.5 flex flex-row gap-2 w-[15.5rem] rounded border-black-85 border">
            <Search className="w-3.5 text-black-60" />
            <input
              type="text"
              className="text-sm text-black-60 w-full bg-transparent focus:outline-none focus-within:outline-none"
              placeholder="Search by order ID..."
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-3">
            <Button padding="md" onClick={() => {}}>
              <div className="flex flex-row gap-1.5 text-black-30">
                <span className="text-base ">Sort</span>
                <Sort className="w-4" />
              </div>
            </Button>
            <Button padding="md" onClick={() => {}}>
              <Download className="w-5 text-black-30 fill-current" />
            </Button>
          </div>
        </div>
        <div className="mt-3">
          <WaitForQueries queries={[transactionQuery]}>
            <DataTable data={data} columns={TRANSACTION_FIELDS} />
          </WaitForQueries>
        </div>
      </div>
    </div>
  )
}
