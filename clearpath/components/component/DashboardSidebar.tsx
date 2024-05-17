'use client'
import React from 'react'
import Image from 'next/image'
import {
  HomeIcon,
  GearIcon,
  StackIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons'

export const DashboardSidebar = () => {
  const [darkMode, setDarkMode] = React.useState(false)
  const changeMode = () => setDarkMode(!darkMode)
  return (
    <div className='h-screen w-max dashNav flex flex-col items-center justify-center'>
      <Image
        src='/group.svg'
        alt='logo'
        width='100'
        height='100'
        className='dashNavLogo'
      />
      <div>
        <HomeIcon className='sideNavIcon' />
        <StackIcon className='sideNavIcon' />
        <GearIcon className='sideNavIcon' />
      </div>
      <button onClick={changeMode} className='modeButton'>
        {darkMode ? (
          <SunIcon className='sideNavIcon' />
        ) : (
          <MoonIcon className='sideNavIcon' />
        )}
      </button>
    </div>
  )
}
