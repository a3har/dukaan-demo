import React from "react"

import Button from "../Button"
import { ChevronArrow } from "../Icons"
import classNames from "classnames"

interface PaginationProps {
  pagination: {
    totalPages: number
    goToNextPage: () => void
    goToPreviousPage: () => void
    goToPage: (page: number) => void
    goToLastPage: () => void
    goToFirstPage: () => void
    currentPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
  field?: string
}

export default function Pagination({ pagination }: PaginationProps) {
  const {
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    goToLastPage,
    goToFirstPage,
    currentPage,
    hasNextPage,
    hasPreviousPage,
  } = pagination

  const currentThreePages = getCurrentThreePages(totalPages, currentPage)

  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <Button
        onClick={() => {
          goToPreviousPage()
        }}
        disabled={!hasPreviousPage}
      >
        <div className="flex flex-row items-center gap-1.5">
          <ChevronArrow className="w-4 rotate-90 text-black-30" />
          <span className="text-sm text-black-30">Previous</span>
        </div>
      </Button>
      {totalPages > 6 ? (
        <div className="flex flex-row">
          {currentPage > 3 && (
            <span
              className="px-1.5 py-1 text-sm"
              onClick={() => {
                goToPage(1)
              }}
            >
              {1}
            </span>
          )}
          {currentPage >= 4 && <span className="px-1.5 py-1 text-sm">...</span>}
          {currentThreePages.map((page) => (
            <span
              key={page}
              className={classNames("px-1.5 py-1 text-sm", {
                "bg-primary-blue rounded text-white": currentPage === page,
              })}
              onClick={() => {
                goToPage(page)
              }}
            >
              {page}
            </span>
          ))}
          {currentPage < totalPages - 2 && (
            <span className="px-1.5 py-1 text-sm">...</span>
          )}
          {currentPage < totalPages - 2 && (
            <span
              className="px-1.5 py-1 text-sm"
              onClick={() => {
                goToPage(totalPages)
              }}
            >
              {totalPages}
            </span>
          )}
        </div>
      ) : (
        [...Array(totalPages)].map((_, index) => (
          <span
            key={index + 1}
            className={classNames("px-1.5 py-1 text-sm", {
              "bg-primary-blue rounded text-white": currentPage === index + 1,
            })}
            onClick={() => {
              goToPage(index + 1)
            }}
          >
            {index + 1}
          </span>
        ))
      )}
      <Button
        className="text-sm"
        onClick={() => {
          console.log("go to next page")
          goToNextPage()
        }}
        disabled={!hasNextPage}
      >
        <div className="flex flex-row items-center gap-1.5">
          <span className="text-sm text-black-30">Next</span>
          <ChevronArrow className="w-4 -rotate-90 text-black-30" />
        </div>
      </Button>
    </div>
  )
}

function getCurrentThreePages(
  totalPages: number,
  currentPage: number
): number[] {
  let pages: number[] = []

  if (totalPages <= 3) {
    return pages
  }

  if ([1, 2, 3].includes(currentPage)) {
    pages.push(1, 2, 3)
  } else if (
    [totalPages, totalPages - 1, totalPages - 2].includes(currentPage)
  ) {
    pages.push(totalPages - 2, totalPages - 1, totalPages)
  } else {
    pages.push(currentPage - 1, currentPage, currentPage + 1)
  }

  return pages
}
