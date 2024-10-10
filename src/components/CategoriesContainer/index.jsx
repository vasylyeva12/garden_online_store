import React from 'react'
import s from './index.module.css'
import CategoryCard from '../CategoryCard'

function CategoriesContainer
({categories}) {
  return (
    <div>
      {
        categories.map(el => <CategoryCard key={el}
        category={el}/> )
      }
    </div>
  )
}

export default CategoriesContainer

