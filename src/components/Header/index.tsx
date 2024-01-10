"use client"
import React from "react"

import { CaretDown, Chat, Help } from "@/components/Icons"

import AppSearch from "./components/AppSearch"
import useAppStore from "@/stores/app"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const { updateAppState, appState } = useAppStore()

  return (
    <div className="py-3 px-8 border-[#D9D9D9] border-b w-full flex flex-row items-center gap-4 bg-white">
      <div
        className="flex flex-col gap-1 w-5 cursor-pointer md:hidden"
        onClick={() => {
          updateAppState({ sidebarOpen: !appState.sidebarOpen })
        }}
      >
        <div className="h-0.5 bg-black-60 rounded-lg transition-all duration-300"></div>
        <div className="h-0.5 bg-black-60 rounded-lg transition-all duration-300"></div>
        <div className="h-0.5 bg-black-60 rounded-lg transition-all duration-300"></div>
      </div>
      <div className="flex flex-row items-center gap-4 flex-1">
        <span className="text-[15px] leading-[1.4rem] text-black-12">
          {title}
        </span>
        <div className="flex relative flex-row items-center text-black-30 cursor-pointer group">
          <Help className="w-3.5 mr-1.5 text-black-30 fill-current" />
          <span className="text-[10px] whitespace-nowrap md:text-xs">
            How it works{" "}
          </span>
          <div className="absolute w-40 top-6 hidden group-hover:flex px-2 py-1 bg-black-60 text-white rounded text-xs">
            This is a dummy tooltip. This should explain how payments should
            work. Let's see how this looks. This is just a dummy tooltip. This
            should explain how payments should work.
          </div>
        </div>
      </div>
      <AppSearch />
      <div className="flex-1 flex-row items-center justify-end gap-3 flex">
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
