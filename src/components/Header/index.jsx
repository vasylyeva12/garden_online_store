import React from 'react'
import s from './index.module.css'
import Logo from '../Logo'

const Header = () => {
  return (
    <header className={s.header}>
        <div className="container">
            <div className={s.header_area}>
                <Logo />
            </div>

        </div>
        
    </header>
  )
}

export default Header