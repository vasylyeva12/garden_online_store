import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import OneDayDiscountModal from '../OneDayDiscountModal'
import { getAllProducts } from '../../requests/products'

const ButtonOneDayDiscount = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState(null)
  
  const allProductsState = useSelector((store) => store.products)

  
  const toggleModal = () => {
    const randomProduct = allProductsState[Math.floor(Math.random() * allProductsState.length)]
    const productWithDiscount = {
      ...randomProduct,
      discont_price: (randomProduct.price / 2).toFixed(2)
    }
    setProduct(productWithDiscount);
    
   
    setIsOpen(true)
  }
  return (
    <div>
        <button className={s.btn} onClick={toggleModal}>
        1 day discount!
        </button>
        <OneDayDiscountModal isOpen={isOpen} setIsOpen={setIsOpen} product={product}/>

    </div>
  )
}

export default ButtonOneDayDiscount