import React from "react"
import FieldValue from "../FieldValue"

interface StatCardProps {
  label: string
  value: any
  type: "currency" | "timestamp" | "integer" | "number"
}

export default function StatCard({ label, value, type }: StatCardProps) {
  return (
    <div className="p-5 flex flex-col gap-4 bg-white">
      <h6 className="text-black-30 text-base">{label}</h6>
      <span className=" text-[2rem] font-medium text-black-30">
        <FieldValue type={type} value={value} currency="INR" />
      </span>
    </div>
  )
}
