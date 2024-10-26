import React from "react";
import { PiHandbagThin, PiHeartThin } from "react-icons/pi";
import s from "./index.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  
    const likedProducts = useSelector((state) => state.likedProducts.likedProducts);
    const cartState = useSelector(store => store.cart)

    // Считаем количество избранных товаров
    const likedCount = likedProducts.length;
    const totalCount = cartState.reduce((acc, el) => acc + (el.count), 0)

  return (
    <div className={s.navbar_actions}>
      <div className={s.nav_liked}>
      <Link to="/liked"> {/* Переход на страницу избранного */}
          <PiHeartThin className={s.favourites} />
          {likedCount > 0 && <span className={s.heart_count}>{likedCount}</span>} {/* Показ количества */}
          
        </Link>
      </div>
      <div className={s.nav_basket}>
        <Link to="/cart">
        <PiHandbagThin className={s.basket} /> {/* Переход на страницу ShoppingCartPage */}
        {totalCount > 0 && <div className={s.bag_quantity}>
          <span>{totalCount}</span>
        </div>}
        
        </Link>
       
      </div>
    </div>
  );
};

export default BurgerMenu;
