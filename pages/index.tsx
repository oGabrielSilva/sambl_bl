import type { NextPage } from 'next'
import Dashboard from '../components/DashboardAdmin'
import Head from '../components/Head'
import Header from '../components/Header'
import Colors from '../utils/Colors'

const Home: NextPage = () => {
  return (
    <div style={{ background: Colors.darkBg, height: '100vh', width: '100vw' }}>
      <Head />
      <Header />
      <Dashboard />
    </div>
  )
}

export default Home
