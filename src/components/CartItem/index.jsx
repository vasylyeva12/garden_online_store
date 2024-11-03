import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export default function CartItem({ id, title, price, image, discont_price, count }) {
  const apiUrl = import.meta.env.APP_API_URL;

  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <img src={`${apiUrl}/${image}`} alt={title} />
        
      <div className={s.data}>
            <div className={s.title_cross}>
              <p>{ title }</p>
              <p className={s.delete_icon} onClick={() => dispatch(deleteProductFromCartAction(id))}> X </p>
            </div>
        
            <div className={s.counter_price}>
              <div className={s.counter_content}>
                  <button className={s.counter_item} onClick={() => dispatch(decrementCountAction(id))}>
                  <FiMinus /></button>
                  <span className={s.counter_value}>{ count }</span>
                  <button className={s.counter_item} onClick={() => dispatch(incrementCountAction(id))}>
                  <FiPlus /></button>
              </div>

              <div className={s.price_content}>
                  <p className={s.real_price}>{ price * count }$</p>
                  <p className={s.discount_price}>{ discont_price * count}$</p>
              </div>
              
            </div>

            
      </div>

    </div>
  )
}