"use client"

import React from "react"

import { format } from "date-fns"
import numeral from "numeral"

interface FieldValueProps {
  type: "currency" | "timestamp" | "integer" | "number"
  currency?: string
  value: any
}

export default function FieldValue({ type, value, currency }: FieldValueProps) {
  switch (type) {
    case "currency":
      return value !== undefined || value !== null
        ? Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency || "INR",
          }).format(value)
        : null
    case "timestamp":
      return value ? format(new Date(value), "do LLL, yyyy") : null
    case "integer":
      return isInt(value) ? value : null
    case "number":
      return isInt(value) ? numeral(value).format("0.0a") : null
    default:
      throw new Error(`FieldValue component is missing this type => ${type}`)
  }
}

function isInt(n: any) {
  return n % 1 === 0
}
