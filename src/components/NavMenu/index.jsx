import React from "react";
import s from "./index.module.css";
import { NavLink } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiHandbagThin } from "react-icons/pi";
import sun from '../../media/sun.svg'
import moon from '../../media/moon.svg'
import ButtonOneDayDiscount from "../ButtonOneDayDiscount";


const NavMenu = () => {
  return (
    <div className={s.wrapper}>   
    <div>
        <div>
            <img src={sun} alt="sun" />
            {/* <img src={moon} alt="moon" /> */}
        </div>
    </div>
       
        <div className={s.navbar_content}>
            <ButtonOneDayDiscount className={s.discountBtn}/>
                     
            <ul className={s.nav}>
              <li className={s.nav_item}>
                <NavLink to="/" >
                  Main Page
                </NavLink>
              </li>
              <li className={s.nav_item}>
                <NavLink to="/categories" >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" >
                  All products
                </NavLink>
              </li>
              <li className={s.nav_item}>
                <NavLink to="/sales" className={s.nav_item}>
                  All sales
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={s.navbar_actions}>
          <IoMdHeartEmpty className={s.navbar_actions_icon}/>
          <PiHandbagThin className={s.navbar_actions_icon}/>           
          
          </div>
        
      
    </div>
  );
};

export default NavMenu;