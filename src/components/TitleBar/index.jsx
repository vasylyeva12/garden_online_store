import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

const TitleBar = ({ title, buttonText, linkTo}) => {
    
  return (
    <div>
        <div className={s.container}>
            <h2>{title}</h2>
            <div className={s.line}></div>
            <Link to={linkTo}>
            <button>{textButton}</button>
            </Link>
            
        </div>
    </div>
  )
}

export default TitleBar