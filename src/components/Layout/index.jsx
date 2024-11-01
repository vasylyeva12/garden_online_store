import React, { useContext } from 'react'
import { Outlet} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import { ThemeContext } from '../../context/ThemeContext'

const Layout = () => {

  const { theme } = useContext (ThemeContext)

  return (
    <div className={theme ? "dark_theme" : "light_theme"}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout