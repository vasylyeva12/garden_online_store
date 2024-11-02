import React from "react";
import s from "./index.module.css";
import { PiHandbagSimpleFill, PiHeartFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleLikedProductAction } from "../../store/reducers/likedProductsReducer";
import { addProductToCartAction } from "../../store/reducers/cartReducer"; // Импортируем действие для корзины
import CustomButton from "../CustomButton";

const ProductItem = ({ id, image, title, price, discont_price, content, productStyles }) => {
  const dispatch = useDispatch();

  const likedProducts = useSelector((store) => store.likedProducts.likedProducts);
  const isLiked = likedProducts.some((el) => el.id === id);

  const likeStyles = {
    color: isLiked ? 'green' : '#424436', // Зелёный цвет, если продукт в избранном
  };

  const handleClickLikeIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(toggleLikedProductAction({ id, image, title, price, discont_price }));
  };

  const handleClickCartIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addProductToCartAction({ id, image, title, price, discont_price })); // Добавляем товар в корзину
  };

  return (
    <div className={`${s.products_wrapper} ${productStyles}`}>
      <div className={s.img_container}>
        <img
          src={`http://localhost:3333/${image}`}
          alt={title}
          className={s.images}
        />
      </div>

      <div className={s.icons_wrapper}>
        {/* Сердечко с зелёным цветом, если продукт в избранном */}
        <PiHeartFill className={s.like} style={likeStyles} onClick={handleClickLikeIcon} />
        {/* Иконка корзины добавляет продукт в корзину */}
        {content !== "modal" && (
          <PiHandbagSimpleFill className={s.bag} style={{ color: '#424436' }} onClick={handleClickCartIcon} />
        )}
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
      
      {/* Кнопка "Добавить в корзину" */}
      {content !== "modal" && (
        <CustomButton
          onClick={handleClickCartIcon}
          buttonStyle={s.custom_btn}
          buttonText="Add to Cart"
        />
      )}
    </div>
  );
};

export default ProductItem;


