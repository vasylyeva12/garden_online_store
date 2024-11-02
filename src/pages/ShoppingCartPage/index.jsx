import React from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsContainer from '../../components/CartItemsContainer';
import { Link } from 'react-router-dom'
import { deleteAllAction } from '../../store/reducers/cartReducer';
import OrderForm from '../../components/OrderForm';

const ShoppingCartPage = () => {
  const cartState = useSelector(store => store.cart);
  const dispatch = useDispatch();
  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);
  const totalPrice = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);

  return (
    <div className={s.shop_cart}>
      <div className={s.cart}>   
        <h1 className={`${s.titleH} shoppingH`}>Shopping Cart</h1>

        <div className={s.linia}>
          <hr />
          <Link to='/products' className={s.store}>Back to the store</Link>
        </div>

      </div>

      {
        cartState.length === 0
          ? <div className={s.empty_cart}>
            <p>Looks like you have no items in your basket currently.</p>
            <Link to='/products' className={s.empty_butt}>Continue Shopping</Link>
          </div>

          : <div className={s.shoping_section}>

            <div className={s.cartitems_block}>
              <CartItemsContainer cart={cartState} />
            </div>

            <div className={s.order_form}>
              <OrderForm totalCount={totalCount} totalPrice={totalPrice} />
            </div>
          </div>
      }

    </div>
  )

}

export default ShoppingCartPage