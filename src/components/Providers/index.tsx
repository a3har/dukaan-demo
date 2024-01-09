"use client"
import React, { useEffect, useState } from "react"
import {
  QueryClientProvider,
  QueryClient,
  MutationCache,
  QueryCache,
} from "@tanstack/react-query"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(
    new QueryClient({
      queryCache: new QueryCache(),
      mutationCache: new MutationCache(),
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          retry: false,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
