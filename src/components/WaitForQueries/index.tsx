import React from "react"
import { UseQueryResult } from "@tanstack/react-query"

import Loader from "@/components/Loaders"

interface WaitForQueriesProps {
  queries: any
  loadingMessage?: string
  children: React.ReactNode
}

export default function WaitForQueries({
  queries,
  loadingMessage,
  children,
}: WaitForQueriesProps) {
  const isLoading = queries.reduce(
    (accm: boolean, currVal: UseQueryResult) => accm || currVal.isLoading,
    false
  )

  const isSuccess = queries.reduce(
    (accm: boolean, currVal: UseQueryResult) => accm && currVal.isSuccess,
    true
  )

  const isError = queries.reduce(
    (accm: boolean, currVal: UseQueryResult) => accm || currVal.isError,
    false
  )

  if (isError) {
    return <div>Error</div>
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <Loader.Spinner size="large" />
        <span className="text-sm text-gray-500">{loadingMessage}</span>
      </div>
    )
  }

  if (isSuccess) {
    return <React.Fragment>{children}</React.Fragment>
  }

  return null
}
