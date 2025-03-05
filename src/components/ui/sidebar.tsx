"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import {
  ArrowLeftIcon,
  ArrowLeftToLineIcon,
  ArrowRightFromLineIcon,
  ArrowRightIcon,
  BellIcon,
  MailIcon,
  MenuIcon,
  Settings,
  UserPlusIcon,
  Users,
  X,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"

export interface SidebarProps {
  children?: React.ReactNode
  defaultCollapsed?: boolean
  toggled?: boolean
  collapsed?: boolean
  logo?: React.ReactNode
  icon?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  collapsedWidth?: number
  width?: number
  collapsible?: boolean
  className?: string
}

export interface SidebarContextProps {
  collapsed: boolean
  toggled: boolean
  rtl: boolean
  collapseSidebar: () => void
  toggleSidebar: () => void
  broken: boolean
  width: number
  collapsedWidth: number
  setToggled: (value: boolean) => void
  setBroken: (value: boolean) => void
  rtlToggle: (value: boolean) => void
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  collapsed: false,
  toggled: false,
  rtl: false,
  collapseSidebar: () => {},
  toggleSidebar: () => {},
  broken: false,
  width: 200,
  collapsedWidth: 80,
  setToggled: () => {},
  setBroken: () => {},
  rtlToggle: () => {},
})

export function Sidebar({
  children,
  defaultCollapsed = false,
  collapsible = true,
  toggled = false,
  collapsed,
  className = "",
  logo,
  icon,
  header,
  footer,
  collapsedWidth = 64,
  width = 240,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [isToggled, setIsToggled] = useState(toggled)
  const [isRtl, setIsRtl] = useState(false)
  const [isBroken, setIsBroken] = useState(false)
  const isMobile = useMobile()

  React.useEffect(() => {
    if (collapsed !== undefined) {
      setIsCollapsed(collapsed)
    }
    setIsToggled(toggled)
  }, [collapsed, toggled])

  const collapseSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleSidebar = () => {
    setIsToggled(!isToggled)
  }

  const rtlToggle = (value: boolean) => {
    setIsRtl(value)
  }

  const handleToggle = () => {
    setIsToggled(false)
  }

  const handleBreakpoint = () => {
    setIsBroken(isMobile)
    setIsCollapsed(isMobile)
  }

  useEffect(() => {
    handleBreakpoint()
  }, [isMobile])

  return (
    <SidebarContext.Provider
      value={{
        collapsed: isCollapsed,
        toggled: isToggled,
        rtl: isRtl,
        collapseSidebar,
        toggleSidebar,
        broken: isBroken,
        width,
        collapsedWidth,
        setToggled: setIsToggled,
        setBroken: setIsBroken,
        rtlToggle,
      }}
    >
      <div className="relative flex h-full max-h-dvh flex-grow">
        <div
          data-testid="sidebar"
          className={`z-40 hidden h-full max-h-screen flex-col bg-sidebar text-sidebar-foreground md:flex
          ${isCollapsed ? "active" : ""}
          ${isToggled ? "toggled" : ""}
          ${isBroken ? "broken" : ""}
          ${isRtl ? "rtl" : ""}
          ${className}`}
          style={{
            width: isCollapsed ? collapsedWidth : width,
            minWidth: isCollapsed ? collapsedWidth : width,
            maxWidth: isCollapsed ? collapsedWidth : width,
          }}
        >
          <div className="flex flex-col gap-4 overflow-auto scrollbar-none">
            <header className="flex h-14 flex-none items-center border-b border-sidebar-border px-4 py-2">
              <div className="flex-grow">
                {isCollapsed ? (
                  <div className="flex items-center justify-center">{icon}</div>
                ) : (
                  <>
                    {header ? (
                      header
                    ) : (
                      <div className="flex w-full items-center gap-2">
                        {logo && logo}
                      </div>
                    )}
                  </>
                )}
              </div>
              {collapsible && (
                <Button
                  size="sm"
                  className="h-8 w-8 rounded-full bg-sidebar-border p-1 text-sidebar-foreground transition hover:bg-sidebar-accent/10"
                  onClick={() => collapseSidebar()}
                >
                  {isCollapsed ? (
                    <ArrowRightFromLineIcon className="h-4 w-4" />
                  ) : (
                    <ArrowLeftToLineIcon className="h-4 w-4" />
                  )}
                </Button>
              )}
            </header>
            <nav className="flex flex-1 flex-col gap-4">
              <div className="flex flex-grow flex-col gap-1 px-2">
                {children}
              </div>
            </nav>
            {footer && (
              <footer className="flex flex-none flex-col border-t border-sidebar-border px-2 py-4">
                {footer}
              </footer>
            )}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 z-30 h-full w-full bg-black/50 md:hidden"
          style={{
            display:
              isBroken && isToggled
                ? "block"
                : "none",
          }}
          onClick={handleToggle}
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
        ></div>
        <div
          data-testid="sidebar-mobile"
          className={`absolute inset-y-0 z-40 flex h-full flex-col bg-sidebar text-sidebar-foreground transition-all md:hidden ${
            isToggled ? "left-0" : "-left-full"
          }`}
          style={{
            width,
          }}
        >
          <div className="flex flex-col gap-4 overflow-auto scrollbar-none">
            <header className="flex h-14 flex-none items-center border-b border-sidebar-border px-4 py-2">
              <div className="flex flex-grow items-center gap-2">
                {logo && logo}
              </div>
              <Button
                size="sm"
                className="h-8 w-8 rounded-full p-1 text-sidebar-foreground"
                onClick={handleToggle}
              >
                <X className="h-4 w-4" />
              </Button>
            </header>
            <nav className="flex flex-1 flex-col gap-4">
              <div className="flex flex-grow flex-col gap-1 px-2">
                {children}
              </div>
            </nav>
            {footer && (
              <footer className="flex flex-none flex-col border-t border-sidebar-border px-2 py-4">
                {footer}
              </footer>
            )}
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}

interface SidebarItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  active?: boolean
  children: React.ReactNode
  alert?: boolean
  disabled?: boolean
}

export function SidebarItem({
  icon,
  children,
  active,
  alert,
  disabled,
  ...props
}: SidebarItemProps) {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild={collapsed}>
          <button
            className={`flex w-full items-center justify-start gap-2 rounded-lg p-2 text-sm transition-all
            ${
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90"
                : "hover:bg-sidebar-accent/10"
            }
            ${collapsed ? "justify-center" : "px-3 py-2"}
            ${disabled ? "pointer-events-none opacity-50" : ""}
            `}
            {...props}
          >
            <div className="shrink-0">{icon}</div>
            {!collapsed && <span className="truncate">{children}</span>}
            {alert && !collapsed && (
              <div className="ml-auto h-2 w-2 rounded-full bg-sidebar-accent"></div>
            )}
            {alert && collapsed && (
              <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-sidebar-accent"></div>
            )}
          </button>
        </TooltipTrigger>
        {collapsed && (
          <TooltipContent side="right">
            <div>{children}</div>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}

export function SidebarSection({
  children,
  title,
  horizontal,
}: {
  children: React.ReactNode
  title?: string
  horizontal?: boolean
}) {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <div className="flex flex-col gap-2 pb-2">
      {title && !collapsed && (
        <h3 className="mb-1 px-3 text-xs font-medium">{title}</h3>
      )}
      {title && collapsed && (
        <h3 className="mb-1 px-3 text-center text-xs font-medium">{title}</h3>
      )}
      {horizontal ? (
        <div className="mx-auto flex flex-row flex-wrap items-center justify-center gap-1 px-2">
          {children}
        </div>
      ) : (
        <div className="flex flex-col gap-1">{children}</div>
      )}
    </div>
  )
}

export function SidebarShrunkenItem({
  icon,
  active,
  children,
  ...props
}: {
  icon: React.ReactNode
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all
            ${
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90"
                : "hover:bg-sidebar-accent/10"
            }`}
            {...props}
          >
            {icon}
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <div>{children}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function SidebarToggleTrigger({
  className,
}: {
  className?: string
}) {
  const { toggleSidebar } = React.useContext(SidebarContext)

  return (
    <Button
      size="md"
      onClick={() => toggleSidebar()}
      className={`flex size-10 items-center justify-center rounded-full bg-card p-2 ring-1 ring-border ${className}`}
    >
      <MenuIcon className="h-5 w-5" />
    </Button>
  )
}

export function SidebarDemo() {
  return (
    <div className="grid min-h-screen grid-cols-[70px_1fr]">
      <Sidebar defaultCollapsed={true}>
        <SidebarItem icon={<Users />}>Users</SidebarItem>
        <SidebarItem icon={<UserPlusIcon />}>Invite users</SidebarItem>
        <SidebarItem icon={<Settings />}>Settings</SidebarItem>
      </Sidebar>
      <div className="p-8">
        <p>Main Content</p>
      </div>
    </div>
  )
}
