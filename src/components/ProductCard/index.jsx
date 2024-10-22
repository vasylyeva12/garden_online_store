import React from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCartAction, deleteProductFromCartAction } from '../../store/reducers/cartReducer';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiShoppingBag } from "react-icons/hi2";

export default function ProductCard({ id, image, title, price }) {

    const cartState = useSelector(store => store.cart);

    const target = cartState.find(el => el.id === id);

    const dispatch = useDispatch();

    // const bagStyles = {
    //   color: target ? 'green' : 'black'
    // }

  return (
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>{ title }</p>
        <p>{ price }$</p>
        <div onClick={() => dispatch(addProductToCartAction({ id, image, title, price }))}>
            Add to cart
        </div>

        {
          target 
          ? <HiShoppingBag onClick={() => dispatch(deleteProductFromCartAction(id))} style={bagStyles} />
          : <HiOutlineShoppingBag onClick={() => dispatch(addProductToCartAction({ id, image, title, price }))} style={bagStyles} />
        }
        
    </div>
  )
}