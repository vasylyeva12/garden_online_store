import React from 'react'

const CategoryItem = ({image, title}) => {
  
  const imageUrl = `http://localhost:3333/products/${image}`;

  return (
    <div className={s.card}>
      <div className={s.image_wrapper}>
        <img src={imageUrl} alt={title} />
      </div>
      <p>{title}</p>

    </div>
  )
}

export default CategoryItem

