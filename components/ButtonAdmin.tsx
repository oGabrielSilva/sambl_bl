import React from 'react'
import {
  IoGitNetworkOutline,
  IoHomeOutline,
  IoNewspaperOutline,
  IoPricetagsOutline,
} from 'react-icons/io5'
import styles from '../styles/Nav.module.css'
import Colors from '../utils/Colors'
import { HeaderMenuAdminOptions } from './Header'

type ButtonAdminProps = {
  menuAdminOption: HeaderMenuAdminOptions
  adminOption: HeaderMenuAdminOptions
  stringName: string
  mouseIn: boolean
  setMenuAdminOption: (item: HeaderMenuAdminOptions) => void
  setMouseIn: (item: boolean) => void
}

type IconProps = {
  menuAdminOption: HeaderMenuAdminOptions
  adminOption: HeaderMenuAdminOptions
  mouseIn: boolean
}

const Icon = ({ adminOption, menuAdminOption, mouseIn }: IconProps) => {
  switch (adminOption) {
    case 'Home':
      return (
        <IoHomeOutline
          size={20}
          className={styles.icon}
          color={
            (menuAdminOption === adminOption && Colors.white) ||
            (mouseIn && Colors.white) ||
            Colors.textDisabled
          }
        />
      )
    case 'Article':
      return (
        <IoNewspaperOutline
          size={20}
          className={styles.icon}
          color={
            (menuAdminOption === adminOption && Colors.white) ||
            (mouseIn && Colors.white) ||
            Colors.textDisabled
          }
        />
      )
    case 'Category':
      return (
        <IoGitNetworkOutline
          size={20}
          className={styles.icon}
          color={
            (menuAdminOption === adminOption && Colors.white) ||
            (mouseIn && Colors.white) ||
            Colors.textDisabled
          }
        />
      )
    case 'Tag':
      return (
        <IoPricetagsOutline
          size={20}
          className={styles.icon}
          color={
            (menuAdminOption === adminOption && Colors.white) ||
            (mouseIn && Colors.white) ||
            Colors.textDisabled
          }
        />
      )
  }
}

const ButtonAdmin = ({
  menuAdminOption,
  adminOption,
  stringName,
  mouseIn,
  setMenuAdminOption,
  setMouseIn,
}: ButtonAdminProps) => (
  <button
    onClick={
      (menuAdminOption !== adminOption &&
        (() => {
          setMenuAdminOption(adminOption)
          setMouseIn(false)
        })) ||
      undefined
    }
    className={(menuAdminOption === adminOption && styles.buttonSelected) || styles.button}
    onMouseEnter={(menuAdminOption !== adminOption && (() => setMouseIn(true))) || (() => {})}
    onMouseLeave={(menuAdminOption !== adminOption && (() => setMouseIn(false))) || (() => {})}
  >
    <Icon adminOption={adminOption} menuAdminOption={menuAdminOption} mouseIn={mouseIn} />
    {stringName}
  </button>
)

export default ButtonAdmin
