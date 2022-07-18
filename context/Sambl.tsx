import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

interface ISamblContext {
  screenSize: number
  menuAdminOption: HeaderMenuAdminOptions
  openNav: boolean
  setOpenNav: (v: navOpenProp | boolean) => void
  setMenuAdminOption: (value: HeaderMenuAdminOptions) => void
}
interface ISamblContextProviderProps {
  children: ReactNode
}

type navOpenProp = (val: boolean) => boolean

export type HeaderMenuAdminOptions = 'Home' | 'Article' | 'Category' | 'Tag'

export const SamblContext = createContext<ISamblContext>({} as ISamblContext)

const SamblContextProvider = ({ children }: ISamblContextProviderProps) => {
  const [screenSize, setScreenSize] = useState<number>(720)
  const [openNav, setOpenNav] = useState(true)
  const [menuAdminOption, setMenuAdminOption] = useState<HeaderMenuAdminOptions>('Article')

  useEffect(() => {
    handleChangeScreenWidth()
    window.addEventListener('resize', handleChangeScreenWidth)

    return () => {
      window.removeEventListener('resize', handleChangeScreenWidth)
    }
  }, [])

  const handleChangeScreenWidth = () => {
    setScreenSize(window.innerWidth)
    if (window.innerWidth <= 620) setOpenNav(false)
  }

  const value = useMemo(
    () => ({ screenSize, menuAdminOption, openNav, setOpenNav, setMenuAdminOption }),
    [menuAdminOption, openNav, screenSize]
  )

  return <SamblContext.Provider value={value}>{children}</SamblContext.Provider>
}

export default SamblContextProvider
