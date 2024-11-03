import React from 'react';
import s from './index.module.css';
import { IoCloseOutline } from "react-icons/io5";

const OrderModalWindow = ({ onClose }) => {
  return (
    <div className={s.modal_background} onClick={onClose}>
      <div className={s.modal_window} onClick={(e) => e.stopPropagation()}>
        <div className={s.modal_message}>
          <p className={s.modal_message_header}>Congratulations</p>
          <p className={s.modal_message_body}>
            Your order has been successfully placed on the website.
          </p>
          <p className={s.modal_message_body}>
            A manager will contact you shortly to confirm your order.
          </p>
        </div>
        <div className={s.modal_close_icon_container}>
          <IoCloseOutline className={s.modal_close_icon} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default OrderModalWindow;

