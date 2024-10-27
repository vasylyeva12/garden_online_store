import React from 'react'
import s from "./index.module.css";

const OrderForm = ({ totalCount, totalPrice }) => {

  return (
    <div>
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
  )
}

export default OrderForm