import React, { useEffect } from 'react'
import s from './index.module.css'
import { getAllProducts } from '../../requests/products'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem'

const ProductsList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts)
    }, [])

    const productsState = useSelector(store => store.products)
    
  return (
    <div>
        {
            productsState.map(el => <ProductItem key={el.id} {...el}/>)
        }
    </div>
  )
}

export default ProductsList