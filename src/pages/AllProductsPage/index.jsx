import React, { useEffect } from 'react'
import s from './index.module.css'
import ProductsList from '../../components/ProductsList'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../../requests/products'

const AllProductsPage = () => {
  const allProductsState = useSelector(store => store.products)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProducts)
  },[])
  return (
    <div>
      <ProductsList />
    </div>
  )
}

export default AllProductsPage