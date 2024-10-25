import React from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsContainer from '../../components/CartItemsContainer';
import { Link } from 'react-router-dom'
import { deleteAllAction } from '../../store/reducers/cartReducer';
import ProductCard from '../../components/ProductCard';
import OrderForm from '../../components/OrderForm';




const ShoppingCartPage = () => {
  const cartState = useSelector(store => store.cart);




  const dispatch = useDispatch();




  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);




  const totalPrice = +cartState.reduce((acc, el) => acc + (el.price * el.count), 0).toFixed(2);




  return (
    <div className={s.shop_cart}>
      <div className={s.cart}>
        <h1>Shopping Cart</h1>




        <div className={s.linia}>
          <hr />
          <button className={s.store}>Back to the store</button>
      </div>




      </div>
         
        {
          cartState.length === 0
          ? <div>
              <p>Looks like you have no items in your basket currently.</p>
              <Link to='/products'>Continue Shopping</Link>
            </div>




          : <div className={s.shoping_section}>




              <div className={s.cartitems_block}>
             
                   <CartItemsContainer cart={cartState} />
                   {/* {<button onClick={() => dispatch    (deleteAllAction())}></button>
                      } */}
                   {/* {<p>Items count: {totalCount}</p>
                    <p>Total sum: {totalPrice}$</p>} */}
                </div>




                <div className={s.order_form}>
                  <div className={s.order_details}>
                      <h2>Order details</h2>




                      <div className={s.order_calculations}>
                          <p> {totalCount} items</p>
                          <div className={s.total_info}>
                              <p> Total </p>
                              <p> {totalPrice}$ </p>
                          </div>
                      </div>
                  </div>




                  <div className={s.input_form}>
                      <ul>
                        <li>Name</li>
                        <li>Phone number</li>
                        <li>Email</li>
                      </ul>
                      <button>Order</button>
                  </div>




                </div>
             </div>
        }  
           
           
       
     
    </div>  
  )
   
}




export default ShoppingCartPage