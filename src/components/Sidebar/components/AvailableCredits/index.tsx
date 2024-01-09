import { Wallet } from "@/components/Icons"
import React from "react"

export default function AvailableCredits() {
  return (
    <div className="px-3 py-1.5 bg-[#353C53] rounded">
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center justify-center h-9 w-9 bg-opacity-10 bg-white rounded ">
          <Wallet className="w-6 h-6 text-white fill-current" />
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] leading-4">Available Credits</span>
          <span className="leading-6 mt-0.5 text-base font-medium">222.10</span>
        </div>
      </div>
    </div>
  )
}
