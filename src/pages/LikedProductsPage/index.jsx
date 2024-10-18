import React from 'react'
import s from './index.module.css'
import ButtonNavigation from '../../components/ButtonNavigation'

const LikedProductsPage = () => {
  return (
    <div className='container'>
      <ButtonNavigation />
      <h2 className={s.title}>Liked products</h2>
    </div>
  )
}

export default LikedProductsPage