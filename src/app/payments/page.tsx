"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"

import api from "@/clients/api"
import Header from "@/components/Header"
import WaitForQueries from "@/components/WaitForQueries"

import PaymentsOverview from "./components/Overview"
import Transactions from "./components/Transactions"

export default function PaymentsPage() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header title="Payments" />
      <div className="py-9 px-8 flex flex-col w-full h-full overflow-y-auto">
        <PaymentsOverview />
        <div className="mt-8 h-full w-full flex flex-col">
          <Transactions />
        </div>
      </div>
    </div>
  )
}
