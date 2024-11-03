import React from "react";
import s from "./index.module.css";
import { PiHandbagSimpleFill, PiHeartFill } from "react-icons/pi"; // Убираем import PiHandbagSimpleFill, так как иконку корзины не нужно отображать в модальном окне
import { useDispatch, useSelector } from "react-redux";
import { toggleLikedProductAction } from "../../store/reducers/likedProductsReducer";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";
import { addProductToCartAction } from "../../store/reducers/cartReducer";

const ProductItem = ({ id, image, title, price, discont_price, content, productStyles }) => {
  const apiUrl = import.meta.env.APP_API_URL;
  const dispatch = useDispatch();

  const likedProducts = useSelector((store) => store.likedProducts.likedProducts);
  const isLiked = likedProducts.some((el) => el.id === id);

  const cartItem = useSelector(store => store.cart)
  const inCart = cartItem.find(el => el.id === id)

  
   // Вычисляем процент скидки
   const discountPercent =
   discont_price !== null
     ? Math.round(((price - discont_price) / price) * 100)
     : null;

  const handleClickLikeIcon = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isLiked) {
      dispatch(toggleLikedProductAction({id}))
    }else{
      dispatch(toggleLikedProductAction({ id, image, title, price, discont_price }));
    }    
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addProductToCartAction({ id: +id, image, title, price, discont_price }));
     
  };

  return (
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
        {/* Сердечко с зелёным цветом, если продукт в избранном */}
        <PiHeartFill className={isLiked ? s.liked : s.like}  onClick={handleClickLikeIcon} />
        {/* Убираем иконку корзины, если контент модальный */}
        {content !== "modal" && (
          <PiHandbagSimpleFill className={inCart ? s.full_bag : s.bag}  onClick={handleAddToCart}/>
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

