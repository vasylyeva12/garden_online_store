import React, { useEffect } from 'react'
import s from './index.module.css'
import { getAllProducts } from '../../requests/products'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem'

const ProductsList = ({products}) => {
   
    
  return (
    <div>
        {
            products.map(el => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}

export default ProductsList