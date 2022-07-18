import React, { useContext, useState } from 'react'
import { strings } from '../utils/Constants'
import styles from '../styles/Nav.module.css'
import ButtonAdmin from './ButtonAdmin'
import { SamblContext } from '../context/Sambl'

const HeaderAdmin = () => {
  const { menuAdminOption, setMenuAdminOption } = useContext(SamblContext)
  const [homeMouseIn, setHomeMouseIn] = useState(false)
  const [articleMouseIn, setArticleMouseIn] = useState(false)
  const [categoryMouseIn, setCategoryMouseIn] = useState(false)
  const [tagMouseIn, setTagMouseIn] = useState(false)

  return (
    <header>
      <nav className={styles.nav}>
        <h1 className={styles.title}>{strings.title.adminNavTitle}</h1>
        <p className={styles.subtitle}>{strings.subtitle.adminNavSubtitle}</p>
        <ButtonAdmin
          adminOption="Home"
          stringName={strings.buttons.adminHome}
          menuAdminOption={menuAdminOption}
          mouseIn={homeMouseIn}
          setMouseIn={setHomeMouseIn}
          setMenuAdminOption={setMenuAdminOption}
        />
        <ButtonAdmin
          stringName={strings.buttons.adminPosts}
          adminOption="Article"
          menuAdminOption={menuAdminOption}
          mouseIn={articleMouseIn}
          setMouseIn={setArticleMouseIn}
          setMenuAdminOption={setMenuAdminOption}
        />
        <ButtonAdmin
          stringName={strings.buttons.adminCategory}
          adminOption="Category"
          menuAdminOption={menuAdminOption}
          mouseIn={categoryMouseIn}
          setMouseIn={setCategoryMouseIn}
          setMenuAdminOption={setMenuAdminOption}
        />
        <ButtonAdmin
          stringName={strings.buttons.adminTags}
          adminOption="Tag"
          menuAdminOption={menuAdminOption}
          mouseIn={tagMouseIn}
          setMouseIn={setTagMouseIn}
          setMenuAdminOption={setMenuAdminOption}
        />
      </nav>
    </header>
  )
}

export default HeaderAdmin
