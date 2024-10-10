import React from 'react'
// import s from './index.module.css'
// import { useDispatch } from 'react-redux'
// import ProductList from '../../components/ProductList'

const AllSalesPage = () => {
//  const dispatch = useDispatch()

 
  return (
    <div className='container'>
      <h1 className={s.title}>Discounted items</h1>
      <ProductList />
      
    </div>
  )
}

export default AllSalesPage