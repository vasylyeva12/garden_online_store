import React from 'react'
import s from "./index.module.css";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllAction } from '../../store/reducers/cartReducer';

const OrderForm = ({ totalCount, totalPrice }) => {

  const dispatch = useDispatch();

  const cartState = useSelector(store => store.cart);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const order = data => {

    reset(); // Очистить поля формы
    dispatch(deleteAllAction()); // Очистить корзину
  }

  const registerName = register('name');
  const registerPhone = register('phone');
  const registerEmail = register('email');

  return (
    <div >
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

      <form className={s.input_form} onSubmit={handleSubmit(order)}>

        <input type="text" placeholder='Name' {...registerName} />
        <input type="text" placeholder='Phone' {...registerPhone} />
        <input type="text" placeholder='Email' {...registerEmail} />

        <button>Order</button>
      </form>

    </div>
  )
}

export default OrderForm