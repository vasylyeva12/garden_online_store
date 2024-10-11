import React from "react";
import s from "./index.module.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiHandbagLight } from "react-icons/pi";
import {
  addLikedProductAction,
  deleteLikedProductAction,
} from "../../store/reducers/likedProductsReducer";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({
  id,
  image,
  title,
  price,
  discont_price,
  productStyle,
}) => {
  // const isLiked = useSelector((state) => state.cart.cartItems.some((el) => el.id === id))

  const dispatch = useDispatch();
  // Вычисляем процент скидки
  const discountPercent =
    discont_price !== 0
      ? Math.round(((price - discont_price) / price) * 100)
      : 0;

  // const handleClickLikeIcon = (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   if (isLiked) {
  //     dispatch(deleteLikedProductAction(id));
  //   } else {
  //     dispatch(addLikedProductAction({ id, image, title, price, discont_price }));
  //   }
  // };

  return (
    <div>
      <div className={`${s.product_item} ${productStyle}`}>
        <div className={s.img_container}>
          <img
            src={`http://localhost:3333/${image}`}
            alt={title}
            className={s.images}
          />
        </div>

        {discountPercent !== 0 && (
          <div className={s.cross_out}>
            <div className={s.discount_text}>-{discountPercent}%</div>
          </div>
        )}

        <div className={s.icons_container}>
          {/* иконка сердце */}
          <IoIosHeartEmpty
            className={s.like}
            // onClick={handleClickLikeIcon}
          />
          {/* иконка корзины */}
          <PiHandbagLight className={s.bag} />
        </div>

        <h3 className={s.product_title}>{title}</h3>
        <div className={s.price_container}>
          {discont_price ? (
            <>
              <p className={s.discount_price}>${discont_price}</p>
              <p className={s.original_price}>${price}</p>
            </>
          ) : (
            <p className={s.discount_price}>${price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
