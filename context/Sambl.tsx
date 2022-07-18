import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

interface ISamblContext {
  screenSize: number
  menuAdminOption: HeaderMenuAdminOptions
  setMenuAdminOption: (value: HeaderMenuAdminOptions) => void
}
interface ISamblContextProviderProps {
  children: ReactNode
}

export type HeaderMenuAdminOptions = 'Home' | 'Article' | 'Category' | 'Tag'

export const SamblContext = createContext<ISamblContext>({} as ISamblContext)

const SamblContextProvider = ({ children }: ISamblContextProviderProps) => {
  const [screenSize, setScreenSize] = useState<number>(720)
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
  }

  const value = useMemo(
    () => ({ screenSize, menuAdminOption, setMenuAdminOption }),
    [menuAdminOption, screenSize]
  )

  return <SamblContext.Provider value={value}>{children}</SamblContext.Provider>
}

export default SamblContextProvider
