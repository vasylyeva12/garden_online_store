import React from 'react'
import CartItem from '../CartItem'

export default function CartItemsContainer({ cart }) {
  return (
    <div>
        {
            cart.map(el => <CartItem key={el.id} {...el} />)
        }
        
    </div>
  )
}