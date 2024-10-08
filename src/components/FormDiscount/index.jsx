import React from "react";
import s from "./index.module.css";
import gardenDiscountForm from '../../media/form_discount.svg'

const FormDiscount = () => {
  return (
    <section className={s.form}>
      <div className="container">
        <div className={s.form_wrapper}>
          <h3 className={s.title}>5% off on the first order</h3>
          <div className={s.form_sale}>
            <img 
            src={gardenDiscountForm} 
            alt="garden discount"
            className={s.form_image} />
            

            <div className={s.form_item}>
              <input
                type="text"
                placeholder="Name"
                className={s.form_input}
              />
              <input
                type="text"
                placeholder="Phone number"
                className={s.form_input}
              />
              <input
                type="text"
                placeholder="Email"
                className={s.form_input}
              />

              <button className={s.btn}>Get a discount</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormDiscount;
