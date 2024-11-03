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
    dispatch(deleteAllAction()); // Очистить всю корзину
  }

  const registerName = register('name', {
    required: '*The field "Name" is required'
  });
  //то, что мы видим в импутах, как подсказка, required:true означает обязательность поля для заполнения
  
  const registerPhone = register('phone', {
    required: '*The field "Phone" is required',
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, // регулярное выражение
      message: 'You entered the wrong phone.' //Message - какое сообщение будет выводиться если заполнено неправильно
    }
  });

  const registerEmail = register('email', {
    required: '*The field "Email" is required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'You entered the wrong e-mail.'
    }
  });

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

        <input type='text' placeholder='Name' {...registerName} />

        {
          errors.name && <p>{errors.name?.message}</p>
        }

        <input type="text" placeholder='Phone' {...registerPhone} />
        {
          errors.phone && <p>{errors.phone?.message}</p>
        }

        <input type="text" placeholder='Email' {...registerEmail} />
        {
          errors.email && <p>{errors.email?.message}</p>
        }

        <button>Order</button>
      </form>

    </div>
  )
}

export default OrderForm