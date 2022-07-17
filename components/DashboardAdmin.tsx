import React from 'react'
import style from '../styles/Dashboard.module.css'
import Article from './Dashboard/Article'
import Category from './Dashboard/Category'
import Home from './Dashboard/Home'
import Tag from './Dashboard/Tag'
import { HeaderMenuAdminOptions } from './Header'

type DashboardProps = {
  menuAdminOption: HeaderMenuAdminOptions
}

const Item = ({ menuAdminOption }: DashboardProps) => {
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

const Dashboard = ({ menuAdminOption }: DashboardProps) => {
  return (
    <main className={style.dashboard}>
      <Item menuAdminOption={menuAdminOption} />
    </main>
  )
}

export default Dashboard
