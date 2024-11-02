import React from "react";
import s from "./index.module.css";
import { PiHandbagSimpleFill, PiHeartFill } from "react-icons/pi"; // Убираем import PiHandbagSimpleFill, так как иконку корзины не нужно отображать в модальном окне
import { useDispatch, useSelector } from "react-redux";
import { toggleLikedProductAction } from "../../store/reducers/likedProductsReducer";
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
        {/* Убираем иконку корзины, если контент модальный */}
        {content !== "modal" && (
          <PiHandbagSimpleFill className={s.bag} style={{ color: '#424436' }} />
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
      
      {/* Убираем зелёную кнопку, если контент модальный */}
      {content !== "modal" && (
        <CustomButton
          onClick={() => dispatch(toggleLikedProductAction({ id, image, title, price, discont_price }))}
          buttonStyle={s.custom_btn}
          buttonText="Add to Cart"
        />
      )}
    </div>
  );
};

export default ProductItem;

