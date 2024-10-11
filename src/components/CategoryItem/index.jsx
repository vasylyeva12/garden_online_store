import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

function CategoryItem({category}) {
  return (
    <div className={s.categories_item}>
    <Link to={`/categories/${category.id}`} className={s.categories_item_link}>
      <img
        className={s.categories_item-image}
        src={`https://exam-server-5c4e.onrender.com${category.image}`}
        alt={category.title}
      />
      <p className={s.categories_item-title}>
        {category.title}
      </p>
    </Link>
  </div>
  )
}

export default CategoryItem
