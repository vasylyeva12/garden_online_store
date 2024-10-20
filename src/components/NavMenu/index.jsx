import React from "react";
import s from "./index.module.css";
import { NavLink } from "react-router-dom";
import ButtonOneDayDiscount from "../ButtonOneDayDiscount";

const NavMenu = () => {
  return (
    <div className={s.wrapper}>
       <li className={s.btn}>
          <ButtonOneDayDiscount  />
          </li>
      <div className={s.navbar_content}>
        <ul className={s.nav}>
          <li className={s.nav_item}>
            <NavLink to="/">Main Page</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/products">All products</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/sales" className={s.nav_item}>
              All sales
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/cart" className={s.nav_item}>
              ShoppingCart
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={s.btn_hidden}>
      <ButtonOneDayDiscount  />
      </div>
      
    </div>
  );
};

export default NavMenu;
