"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"

import api from "@/clients/api"
import StatCard from "@/components/StatCard"
import WaitForQueries from "@/components/WaitForQueries"
import classNames from "classnames"

export default function PaymentsOverview() {
  const paymentsStats = useQuery({
    queryFn: () => {
      return api.get("api/payments/stats", {})
    },
    queryKey: ["paymentsStats"],
  })

  const stats = paymentsStats.data?.stats || []

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-xl font-medium text-black-12">Overview</h4>
        <div>Date Filter</div>
      </div>
      <div
        className={classNames("mt-6", {
          "flex items-center justify-center min-h-32": paymentsStats.isLoading,
          "grid grid-cols-2 gap-5": !paymentsStats.isLoading,
        })}
      >
        <WaitForQueries queries={[paymentsStats]}>
          {stats?.map((stat: any) => {
            const { label, value, type, stat: statType } = stat
            return (
              <StatCard
                label={label}
                value={value}
                type={type}
                key={statType}
              />
            )
          })}
        </WaitForQueries>
      </div>
    </div>
  )
}
