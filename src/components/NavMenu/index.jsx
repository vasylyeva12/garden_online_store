import React from "react";
import s from "./index.module.css";
import { NavLink } from "react-router-dom";
import ButtonOneDayDiscount from "../ButtonOneDayDiscount";

const NavMenu = ({ nav }) => {
  return (
    <div className={s.wrapper}>
      <li className={s.btn}>
        <ButtonOneDayDiscount />
      </li>    

        <ul className={nav ? [s.menu, s.active].join(' ') : s.menu}>
          <li className={s.nav_item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? `${s.link} ${s.active_link}` : s.link)}
            >
              Main Page
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink 
            to="/categories"
            className={({ isActive }) => (isActive ? `${s.link} ${s.active_link}` : s.link)}
            
            >Categories
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink 
            to="/products"
            className={({ isActive }) => (isActive ? `${s.link} ${s.active_link}` : s.link)}
            >All products
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink 
            to="/sales" 
            className={({ isActive }) => (isActive ? `${s.link} ${s.active_link}` : s.link)}
            >
              All sales
            </NavLink>
          </li>
          <div className={s.btn_hidden}>
             <ButtonOneDayDiscount />
          </div>
        </ul>
      
      
    </div>
  );
};

export default NavMenu;
