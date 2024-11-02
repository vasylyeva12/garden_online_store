import React from "react";
import s from "./index.module.css";
import { PiHandbagSimpleFill, PiHeartFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartAction, deleteAllAction } from "../../store/reducers/cartReducer";
import { Link } from "react-router-dom";
import { toggleLikedProductAction } from "../../store/reducers/likedProductsReducer";
import CustomButton from "../CustomButton";

const ProductItem = ({ id, image, title, price, discont_price, content, productStyles }) => {
  const apiUrl = import.meta.env.APP_API_URL;
  const dispatch = useDispatch();

  const cartState = useSelector(store => store.cart)
  const target = cartState.find(el => el.id === id);
  const bagStyles = {
    color: target ? '#92A134' : '#424436'
  }

  // Вычисляем процент скидки
  const discountPercent =
    discont_price !== null
      ? Math.round(((price - discont_price) / price) * 100)
      : null;

  const handleClickLikeIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(
      toggleLikedProductAction({ id, image, title, price, discont_price })
    );
  };

  const handleClickCartIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(
      addProductToCartAction({ id, image, title, price, discont_price })
    );
  };

  const handleClickAddProduct = () => {
    dispatch(addProductToCartAction({ id, image, title, price, discont_price }));
    // dispatch(deleteAllAction());
  };

  const handleClickRemoveProduct = () => {
    dispatch(removeFromCart({ id, image, title, price, discont_price }));
  };

  return (
    <div>

    <div className={`${s.products_wrapper} ${productStyles}`}>
      <Link to={`/products/${id}`}>
        <div className={s.img_container}>
          <img
            src={`${apiUrl}/${image}`}
            alt={title}
            className={s.images}
          />
        </div>

        {discountPercent !== null && (
          <div className={s.cross_out}>
            <div className={s.discount_text}>-{discountPercent}%</div>
          </div>
        )}
      </Link>

      <div className={s.icons_wrapper}>
        <PiHeartFill className={s.like} onClick={handleClickLikeIcon} />
        <PiHandbagSimpleFill className={s.bag} onClick={handleClickCartIcon} />
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
       {/* Кнопка "Добавить в корзину" или "Удалить из корзины" */}
       {content === "modal" ? (
          ""
        ) : (
          <CustomButton
            onClick={
              cartState ? handleClickRemoveProduct : handleClickAddProduct
            }
            buttonStyle={s.custom_btn}
            buttonText={cartState ? "Add to Cart" : "Delete from Cart"}
          />
        )}

    </div>
    
    {content === "modal" ? (
        <CustomButton
          onClick={
            cartState ? handleClickAddProduct : handleClickRemoveProduct
          }
          buttonStyle={s.custom_btn_modal}
          buttonText={cartState ? "Add to Cart"  : "Delete from Cart"}
        />
      ) : (
        ""
      )}

    </div>
  );
};

export default ProductItem;
