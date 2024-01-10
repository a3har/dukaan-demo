import { Search } from "@/components/Icons"
import React from "react"

export default function AppSearch() {
  return (
    <div className="rounded-md flex-row items-center bg-[#F2F2F2] px-4 py-[0.565rem] gap-2 hidden md:flex md:w-[25rem]">
      <Search className="w-4 h-4 text-black-50 fill-current md:block hidden" />
      <input
        type="text"
        className="text-[15px] text-black-50 w-full leading-5 bg-transparent focus:outline-none focus-within:outline-none"
        placeholder="Search features, tutorials, etc."
      />
    </div>
  )
}
