import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import api from "@/clients/api"
import useQueryParams from "@/hooks/useQueryParams"
import { Download, Search, Sort } from "@/components/Icons"
import Button from "@/components/Button"
import { DataTable } from "@/components/DataTable"
import { TRANSACTION_FIELDS } from "@/constants/transactions"
import WaitForQueries from "@/components/WaitForQueries"

import TransactionCell from "./components/Cell"

const PAGE_SIZE = 10

export default function Transactions() {
  const { searchParams, updateQueryParam, removeQueryParams } = useQueryParams()
  const currentPage = searchParams.get("transactions_page") || 1
  const [orderIdFilter, setOrderIdFilter] = useState<string>(
    searchParams.get("transactions_filter_orderId") || ""
  )

  const params = {
    pagination: {
      page: currentPage,
      size: PAGE_SIZE,
    },
    filters: {
      orderId: orderIdFilter,
    },
  }
  const transactionQuery = useQuery({
    queryKey: ["transactions", params],
    queryFn: () => {
      return api.post("api/payments/transactions", params, {})
    },
  })

  const data = transactionQuery.data?.transactions

  useEffect(() => {
    if (orderIdFilter) {
      updateQueryParam("transactions_filter_orderId", orderIdFilter)
      removeQueryParams(["transactions_page"])
    } else {
      removeQueryParams(["transactions_filter_orderId"])
    }
  }, [orderIdFilter])

  return (
    <div className="flex flex-col w-full">
      <h4 className="text-xl font-medium text-black-12">Transactions</h4>
      <div className="shadow-table p-3 bg-white rounded-lg mt-5 flex items-center flex-col">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="px-4 py-2.5 flex flex-row gap-2 w-40 md:w-[15.5rem] rounded border-black-85 border">
            <Search className="w-3.5 text-black-60" />
            <input
              type="text"
              className="text-sm text-black-60 w-full bg-transparent focus:outline-none focus-within:outline-none"
              placeholder="Search by order id ..."
              value={orderIdFilter}
              onChange={(e) => {
                setOrderIdFilter(e.target.value)
              }}
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-3">
            <Button padding="md" onClick={() => {}}>
              <div className="flex flex-row gap-1.5 text-black-30">
                <span className="text-base ">Sort</span>
                <Sort className="w-4" />
              </div>
            </Button>
            <Button padding="sm" onClick={() => {}}>
              <Download className="w-5 text-black-30 fill-current" />
            </Button>
          </div>
        </div>
        <div className="mt-3 overflow-x-auto w-80 md:w-full">
          <WaitForQueries queries={[transactionQuery]}>
            <DataTable
              data={data}
              columns={TRANSACTION_FIELDS}
              CustomCell={TransactionCell}
              size={PAGE_SIZE}
              total={transactionQuery.data?.total || 0}
              name="transactions"
            />
          </WaitForQueries>
        </div>
      </div>
    </div>
  )
}
