import React, { useContext } from 'react'
import { SamblContext } from '../context/Sambl'
import style from '../styles/Dashboard.module.css'
import Article from './Dashboard/Article'
import Category from './Dashboard/Category'
import Home from './Dashboard/Home'
import Tag from './Dashboard/Tag'

const Item = () => {
  const { menuAdminOption } = useContext(SamblContext)

  switch (menuAdminOption) {
    case 'Home':
      return <Home />
    case 'Article':
      return <Article />
    case 'Category':
      return <Category />
    case 'Tag':
      return <Tag />
    default:
      return <Home />
  }
}

const Dashboard = () => {
  return (
    <main className={style.dashboard}>
      <Item />
    </main>
  )
}

export default Dashboard
