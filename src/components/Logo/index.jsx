import React from 'react'
import s from './index.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../media/logo.svg'
import ThemeToggle from '../ThemeToggle'

const Logo = () => {
  return (
    <div className={s.logo}>
        <NavLink to='/'>
            <img src={logo} alt="logo" />
        </NavLink>
        <ThemeToggle />
    </div>
  )
}

export default Logo