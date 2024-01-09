import React from "react"

import StoreSwitcher from "./components/StoreSwitcher"
import SidebarNavigation from "./components/Navigation"
import AvailableCredits from "./components/AvailableCredits"

export default function Sidebar() {
  return (
    <div className="w-56 bg-secondary-navbar h-full flex flex-col text-white ">
      <div className="p-4">
        <StoreSwitcher />
      </div>
      <div className="pt-6 px-2">
        <SidebarNavigation />
      </div>
      <div className="p-4 mt-auto">
        <AvailableCredits />
      </div>
    </div>
  )
}
