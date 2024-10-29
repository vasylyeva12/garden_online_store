import React from "react";
import { PiHandbagThin, PiHeartThin } from "react-icons/pi";
import s from "./index.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const BurgerMenu = ({ nav, setNav}) => {
  const likedProducts = useSelector(
    (state) => state.likedProducts.likedProducts
  );
  const cartState = useSelector((store) => store.cart);

  // Считаем количество избранных товаров
  const likedCount = likedProducts.length;
  const totalCount = cartState.reduce((acc, el) => acc + el.count, 0);

  return (
    <div className={s.navbar_actions}>
      <div className={s.nav_liked}>
        <NavLink to="/liked">
          
          {/* Переход на страницу избранного */}
          <PiHeartThin className={s.favourites} />
          {likedCount > 0 && (
            <span className={s.heart_count}>{likedCount}</span>
          )}
          {/* Показ количества */}
        </NavLink>
      </div>
      <div className={s.nav_basket}>
        <NavLink to="/cart">
          <PiHandbagThin className={s.basket} />
          </NavLink>
          {/* Переход на страницу ShoppingCartPage, отображение колличества товаров в корзине */}
          {totalCount > 0 && (
            <div className={s.bag_quantity}>
              <span>{totalCount}</span>
            </div>
          )}        
      </div>
       {/* Открытие и закрытие бургер меню */}
       <div onClick={() => setNav(!nav)} className={s.mobile_btn}>
          {nav ? <AiOutlineClose size={44} /> : <AiOutlineMenu size={44} />}
       </div>
    </div>
  );
};

export default BurgerMenu;
