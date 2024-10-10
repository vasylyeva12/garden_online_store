import React from 'react'
import s from './index.module.css'
import { IoIosHeartEmpty } from "react-icons/io";
import { PiHandbagLight } from "react-icons/pi";

const ProductItem = ({id, image, title, price, discont_price}) => {
    // Вычисляем процент скидки
  const discountPercent =
  discont_price !== 0
    ? Math.round(((price - discont_price) / price) * 100)
    : 0;
  return (
    <div>
        <div className={s.product_item}>
            <div className={s.img_container}>
                <img 
                src={`http://localhost:3333/${image}`} 
                alt={title}
                className={s.images} />
            </div>
            {discountPercent !== 0 && (
                <div className={s.cross_out}>
                    <div className={s.discount_text}>-{discountPercent}%</div>
                </div>
            )}
            {/* иконка сердце */}
            <IoIosHeartEmpty className={s.like}/>
            {/* иконка корзины */}
            <PiHandbagLight className={s.bag}/>

            <h3 className={s.product_title}>{title}</h3>
            <div className={s.price_container}>
                {
                    discont_price ? (
                        <>
                        <p className={s.discount_price}>${discont_price}</p>
                        <p className={s.original_price}>${price}</p>
                        </>
                    ) : (
                        <p className={s.discount_price}>${price}</p>
                    )
                }
            </div>

        </div>
    </div>
  )
}

export default ProductItem