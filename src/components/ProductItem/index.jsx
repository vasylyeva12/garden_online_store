import React from "react";
import s from "./index.module.css";
import { PiHandbagSimpleFill, PiHeartFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addProductToCartAction } from "../../store/reducers/cartReducer";
import { Link } from "react-router-dom";
import { toggleLikedProductAction } from "../../store/reducers/likedProductsReducer";

const ProductItem = ({ id, image, title, price, discont_price }) => {
  const dispatch = useDispatch();

  // Вычисляем процент скидки
  const discountPercent =
    discont_price !== null
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

  const handleClickLikeIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(toggleLikedProductAction({ id, image, title, price, discont_price }));
  };

  const handleClickCartIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addProductToCartAction({ id, image, title, price, discont_price }));
  };

  return (
    <div className={`${s.products_wrapper}`}>
      <Link to={`/products/${id}`}>
        <div className={s.img_container}>
          <img src={`http://localhost:3333/${image}`} alt={title} className={s.images} />
        </div>

        {discountPercent !== null && (
          <div className={s.cross_out}>
            <div className={s.discount_text}>-{discountPercent}%</div>
          </div>
        )}
      </Link>

      <div className={s.icons_wrapper}>
        <PiHeartFill 
          className={s.like}
          onClick={handleClickLikeIcon}
        />
        <PiHandbagSimpleFill 
          className={s.bag} 
          onClick={handleClickCartIcon} 
        />
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
  );
};

export default ProductItem;