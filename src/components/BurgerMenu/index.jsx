import React from "react";
import { PiHandbagThin, PiHeartThin } from "react-icons/pi";
import s from "./index.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  
    const likedProducts = useSelector((state) => state.likedProducts.likedProducts);

    // Считаем количество избранных товаров
    const likedCount = likedProducts.length;

  return (
    <div className={s.navbar_actions}>
      <div className={s.nav_favourites}>
      <Link to="/liked"> {/* Переход на страницу избранного */}
          <PiHeartThin className={s.favourites} />
          {likedCount > 0 && <span className={s.heart_count}>{likedCount}</span>} {/* Показ количества */}
          
        </Link>
      </div>
      <div className={s.nav_basket}>
        <PiHandbagThin className={s.basket} />
      </div>
    </div>
  );
};

export default BurgerMenu;
