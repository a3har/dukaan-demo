import React from "react"
import Image from "next/image"

import { ChevronArrow } from "@/components/Icons"

import StoreLogo from "./assets/store_logo.png"

export default function StoreSwitcher() {
  return (
    <div className="px-2 flex flex-row items-center gap-3">
      <Image
        src={StoreLogo}
        alt="store_logo"
        className="w-10 h-10 rounded object-cover mr-3"
      />
      <div className="flex flex-col w-full gap-1">
        <span className="text-[15px] font-medium">Nishyaan</span>
        <a
          href="https://mydukaan.io/"
          className="opacity-80 underline text-[13px] underline-offset-4 cursor-pointer"
          target="_blank"
        >
          View Store
        </a>
      </div>
      <div className="w-5">
        <ChevronArrow className="w-5" />
      </div>
    </div>
  )
}
