import useQueryParams from "@/hooks/useQueryParams"

interface SearchParamsPaginationProps {
  total: number
  size: number
  key: string
}

export default function useSearchParamsPagination({
  total,
  size,
  key,
}: SearchParamsPaginationProps) {
  const { updateQueryParam, getQueryParam } = useQueryParams()
  const pageSize = parseInt(getQueryParam(`${key}_page_size`) || `${size}`)
  const queryParamKey = `${key}_page`
  const currentPage: number = parseInt(getQueryParam(queryParamKey) || "") || 1
  const numberOfPages = Math.ceil(total / pageSize)

  return {
    totalPages: numberOfPages,
    currentPage: currentPage,
    goToNextPage: () => {
      const page = parseInt(getQueryParam(queryParamKey) || "") || 1
      updateQueryParam(queryParamKey, (page + 1).toString())
    },
    goToPreviousPage: () => {
      const page = parseInt(getQueryParam(queryParamKey) || "")
      updateQueryParam(queryParamKey, (page - 1).toString())
    },
    goToPage: (page: number) => {
      if (page != currentPage) {
        updateQueryParam(queryParamKey, page.toString())
      }
    },
    goToLastPage: () => {
      updateQueryParam(queryParamKey, numberOfPages.toString())
    },
    goToFirstPage: () => {
      updateQueryParam(queryParamKey, "1")
    },
    hasNextPage: currentPage < numberOfPages,
    hasPreviousPage: currentPage > 1,
    pageParamName: queryParamKey,
  }
}

export const getPageSizeParam = (key: string) => `${key}_size`
