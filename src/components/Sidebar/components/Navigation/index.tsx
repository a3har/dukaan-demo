"use client"

import React from "react"
import classNames from "classnames"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SCREENS } from "@/constants/screents"

export default function SidebarNavigation() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col gap-1">
      {SCREENS.map((screen, index) => {
        const { path, Icon, title } = screen
        const isActive = pathname === path
        return (
          <Link
            href={path}
            key={path}
            className={classNames(
              "px-4 py-2 rounded text-sm flex flex-row items-center gap-3 hover:bg-opacity-10 hover:bg-white cursor-pointer transition-colors duration-200",
              {
                "bg-opacity-10 bg-white": isActive,
              }
            )}
          >
            {Icon && <Icon className="w-5 text-white fill-current" />}
            <span
              className={classNames({
                "font-medium": isActive,
              })}
            >
              {title}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
