import React, { useEffect, useState } from 'react'
import s from './index.module.css'

import ProductItem from '../ProductItem'

const ProductsList = ({products, content}) => {
  //сохраняем список продуктов, переданных в пропсах
// const products = propProducts;

if(!products || products.length === 0) {
  return <div>No products available</div>
}
// состояние текущего списка продуктов

const [allProducts, setAllproducts] = useState(products);

useEffect(() => {
  const discountedProducts = products.filter(
    (product) => product.discont_price
  )
  if (content === 'main') {
    const limitProducts = discountedProducts.sort(
      () => Math.random() - 0.5
    )
    setAllproducts(limitProducts.slice(0, 4))   
    
  }else if (content === 'sale') {
    setAllproducts(discountedProducts)
  }else{
    setAllproducts(products)
  }
}, [products])
   
    
  return (
    <div className={s.products_list}>
        {
            products.map(el => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}

export default ProductsList