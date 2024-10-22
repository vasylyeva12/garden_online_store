import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteProductFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';

export default function CartItem({ id, title, price, image, discont_price, count }) {

  const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <img src={`http://localhost:3333/${image}`} alt={title} />
        
      <div className={s.data}>
            <div className={s.title_cross}>
              <p>{ title }</p>
              <p onClick={() => dispatch(deleteProductFromCartAction(id))}> X </p>
            </div>
        
            <div className={s.counter_price}>
              <button className={s.counter_item} onClick={() => dispatch(decrementCountAction(id))}>
              -
              </button>
              <p>{ count }</p>
              <button className={s.counter_item} onClick={() => dispatch(incrementCountAction(id))}>
              +
              </button>

              <p>{ price * count }$</p>
              <p>{ discont_price * count}$</p>
            </div>
      </div>

    </div>
  )
}