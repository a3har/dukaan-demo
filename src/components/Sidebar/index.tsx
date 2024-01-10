"use client"

import React from "react"
import classNames from "classnames"

import useAppStore from "@/stores/app"

import StoreSwitcher from "./components/StoreSwitcher"
import SidebarNavigation from "./components/Navigation"
import AvailableCredits from "./components/AvailableCredits"

export default function Sidebar() {
  const { appState, updateAppState } = useAppStore()
  const sidebarOpen = appState.sidebarOpen
  return (
    <div>
      <div
        className={classNames("inset-0 absolute bg-black bg-opacity-40 z-10", {
          hidden: !sidebarOpen,
        })}
        onClick={() => {
          updateAppState({ sidebarOpen: false })
        }}
      ></div>

      <div
        className={classNames(
          "w-56 bg-secondary-navbar h-full flex-col text-white flex md:static transition-transform duration-300 absolute z-20",
          {
            "transform translate-x-0": sidebarOpen,
            "transform -translate-x-full md:translate-x-0": !sidebarOpen,
          }
        )}
      >
        <div className="p-4">
          <StoreSwitcher />
        </div>
        <div className="pt-6 px-2">
          <SidebarNavigation />
        </div>
        <div className="p-4 mt-auto bottom-0">
          <AvailableCredits />
        </div>
      </div>
    </div>
  )
}
