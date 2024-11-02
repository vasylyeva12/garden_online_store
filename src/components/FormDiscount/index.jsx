import React from "react";
import s from "./index.module.css";
import gardenDiscountForm from '../../media/form_discount.svg'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";


const FormDiscount = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleDiscountSubmit = data => {
    console.log(data);
    reset(); // Очистить поля формы
    dispatch(deleteAllAction()); // Очистить корзину
    onSubmit();
  }
 

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
            

            <form onSubmit={handleSubmit(handleDiscountSubmit)} className={s.form_block}>
              <div className={s.form_item}>
                <label htmlFor="username"></label>
                <input className={s.form_input}
                id="username"
                name="username"
                type="text"
                placeholder="Name"
                {...register("username", {
                  required: 'Name required',
                  minLength:{value: 2, message: 'Minimum name length 2 letters'},
                  maxLength:{ value: 20, message: 'Maximum name length 20 letters'}
                })}                
              />
               <p className={s.error_message}>{errors.username?.message}</p>
              </div>

              <div className={s.form_item}>
                <label htmlFor="phone"></label>
                <input className={s.form_input}
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                {...register('phone', {
                  required: 'Phone number required',
                  pattern: {
                    value: /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
                    message: 'Incorrect phone number'
                  },
                })}                
              />
              <p className={s.error_message}>{errors.phone?.message}</p>
              </div>

              <div className={s.form_item}>
                <label htmlFor="email"></label>
                <input className={s.form_input}
                type="text"
                placeholder="Email"
                id="email"
                name="email"
              
              {...register("email", {
                required: 'Email required',
                pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Incorrect email format'}
              })}
              />
              <p className={s.error_message}>{errors.email?.message}</p>
              </div>     
                <button className={s.btn}>Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormDiscount;
