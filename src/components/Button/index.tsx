import React from "react"
import classNames from "classnames"

interface ButtonProps {
  padding?: "sm" | "md" | "none"
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function Button({
  padding = "md",
  className,
  onClick,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "text-black-30 border border-black-85 rounded  transition-colors duration-200 ease-in-out bg-white",
        PADDING_TO_CLASSNAME_MAP[padding],
        {
          "opacity-50 cursor-not-allowed": disabled,
          "hover:bg-gray-50 cursor-pointer": !disabled,
        },
        className
      )}
    >
      {children}
    </button>
  )
}

const PADDING_TO_CLASSNAME_MAP = {
  sm: "p-2",
  md: "px-3 py-1.5 ",
  none: "",
}
