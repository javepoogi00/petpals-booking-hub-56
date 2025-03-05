
"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const isMobile = useMobile()
  
  return (
    <div
      ref={ref}
      className={cn(
        "fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full bg-sidebar border-r border-sidebar-border w-72 sm:translate-x-0",
        className
      )}
      {...props}
    />
  )
})
Sidebar.displayName = "Sidebar"

export { Sidebar }
