import React from "react";
import { PiHandbagThin, PiHeartThin } from "react-icons/pi";
import s from "./index.module.css";

const BurgerMenu = () => {
  return (
    <div className={s.navbar_actions}>
      <div className={s.nav_favourites}>
        <PiHeartThin className={s.favourites} />
      </div>
      <div className={s.nav_basket}>
        <PiHandbagThin className={s.basket} />
      </div>
    </div>
  );
};

export default BurgerMenu;
