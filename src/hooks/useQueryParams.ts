import React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type Params = Record<string, string>

export default function useQueryParams() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  function updateQueryParams(paramsToAdd: Params) {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    for (const [key, value] of Object.entries(paramsToAdd)) {
      params.set(key, value)
    }
    const search = params.toString()
    const query = search ? `?${search}` : ""
    router.replace(`${pathname}${query}`)
  }

  function removeQueryParams(paramsToRemove: string[]) {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    for (const key of paramsToRemove) {
      params.delete(key)
    }
    const search = params.toString()
    const query = search ? `?${search}` : ""
    router.replace(`${pathname}${query}`)
  }

  function updateQueryParam(key: string, value: string) {
    const params = new URLSearchParams(Array.from(searchParams.entries()))
    params.set(key, value)
    const search = params.toString()
    const query = search ? `?${search}` : ""
    router.replace(`${pathname}${query}`)
  }

  function getQueryParam(key: string) {
    return searchParams.get(key)
  }

  function getAllQueryParams(): string[] {
    return Array.from(searchParams.keys())
  }

  function removeAllParams() {
    const params = Array.from(searchParams.keys())
    params.forEach((param) => {
      removeQueryParams([param])
    })
  }

  return {
    updateQueryParams,
    updateQueryParam,
    removeQueryParams,
    searchParams,
    getQueryParam,
    removeAllParams,
    getAllQueryParams,
  }
}
