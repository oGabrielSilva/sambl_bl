import type { NextPage } from 'next'
import { useState } from 'react'
import Dashboard from '../components/DashboardAdmin'
import Head from '../components/Head'
import Header, { HeaderMenuAdminOptions } from '../components/Header'
import Colors from '../utils/Colors'

const Home: NextPage = () => {
  const [menuAdminOption, setMenuAdminOption] = useState<HeaderMenuAdminOptions>('Article')

  return (
    <div style={{ background: Colors.darkBg, height: '100vh', width: '100vw' }}>
      <Head />
      <Header menuAdminOption={menuAdminOption} setMenuAdminOption={setMenuAdminOption} />
      <Dashboard menuAdminOption={menuAdminOption} />
    </div>
  )
}

export default Home
