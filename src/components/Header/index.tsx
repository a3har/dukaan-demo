import React from "react"

import { CaretDown, Chat, Help } from "@/components/Icons"

import AppSearch from "./components/AppSearch"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="py-3 px-8 border-[#D9D9D9] border-b w-full flex flex-row items-center gap-4 bg-white">
      <div className="flex flex-row items-center gap-4 flex-1">
        <span className="text-[15px] leading-[1.4rem] text-black-12">
          {title}
        </span>
        <div className="flex flex-row items-center text-black-30">
          <Help className="w-3.5 mr-1.5 text-black-30 fill-current" />
          <span className="text-xs ">How it works </span>
        </div>
      </div>
      <AppSearch />
      <div className="flex-1 flex flex-row items-center justify-end gap-3">
        <div className="w-10 h-10 flex flex-row items-center justify-center rounded-full cursor-pointer bg-black-90">
          <Chat className="w-5 text-black-30" />
        </div>
        <div className="w-10 h-10 flex flex-row items-center justify-center rounded-full cursor-pointer bg-black-90">
          <CaretDown className="w-3 text-black-30" />
        </div>
      </div>
    </div>
  )
}
