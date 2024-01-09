"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"

import api from "@/clients/api"
import StatCard from "@/components/StatCard"
import WaitForQueries from "@/components/WaitForQueries"
import classNames from "classnames"
import Button from "@/components/Button"
import { ChevronArrow } from "@/components/Icons"

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
        <Button
          onClick={() => {
            console.log("Open Date Filter")
          }}
        >
          <div className="flex flex-row items-center gap-2">
            <span className="text-base">Last Month</span>
            <ChevronArrow className="w-4 text-black-30 fill-current" />
          </div>
        </Button>
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
