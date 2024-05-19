'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  HomeIcon,
  GearIcon,
  StackIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const DashboardSidebar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState(null)

  const changeMode = () => setDarkMode(!darkMode)

  const handleIconClick = (icon) => {
    setSelectedIcon(icon)
  }

  return (
    <div className="h-screen w-max dashNav flex flex-col items-center justify-center px-4">
      <Image
        src="/group.svg"
        alt="logo"
        width="100"
        height="100"
        className="dashNavLogo"
      />

      <div className="flex flex-col space-y-4 mt-8">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/dashboard/terminal">
                <HomeIcon
                  className={`sideNavIcon cursor-pointer ${
                    selectedIcon === 'home' ? 'text-green-500' : 'text-black'
                  }`}
                  onClick={() => handleIconClick('home')}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Terminal</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/dashboard/workspace">
                <StackIcon
                  className={`sideNavIcon cursor-pointer ${
                    selectedIcon === 'workspace' ? 'text-green-500' : 'text-black'
                  }`}
                  onClick={() => handleIconClick('workspace')}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Workspace</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/dashboard/preferences">
                <GearIcon
                  className={`sideNavIcon cursor-pointer ${
                    selectedIcon === 'preferences' ? 'text-green-500' : 'text-black'
                  }`}
                  onClick={() => handleIconClick('preferences')}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Preferences</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <button onClick={changeMode} className="modeButton">
        {darkMode ? (
          <SunIcon className="sideNavIcon" />
        ) : (
          <MoonIcon className="sideNavIcon" />
        )}
      </button>
    </div>
  )
}