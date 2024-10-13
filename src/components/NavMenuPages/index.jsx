import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

const NavMenuPages = () => {
  return (
    <div>
        <nav className={s.navigation}>
            <div className={s.item}>
                <Link to ='/'>Main page </Link>
            </div>

            <div className={s.line}></div> {/* Линия между элементами */}

            <div className={s.item}>
                <Link to ='catigories'>Catigories</Link>
            </div>

            <div className={s.line}></div> 

            <div className={s.item}>
                <Link to ='ProductsByCategoriesPage'>Tools and equipment</Link> 
            </div>

            <div className={s.line}></div> 
            
            <div className={s.item}>
                <Link to ='/'>Secateurs</Link>
            </div>
             
        </nav>    


    
    </div>
  )
}

export default NavMenuPages