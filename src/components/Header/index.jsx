import React, { useState } from "react";
import s from "./index.module.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import BurgerMenu from "../BurgerMenu";

const Header = () => {
  // Состояние для управления видимостью бургер меню
  const [nav, setNav] = useState(false)
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header_section}>
          <Logo className={s.logo} />
          <NavMenu nav={nav}/>
          <BurgerMenu nav={nav} setNav={setNav}/>
           {/* Overlay для закрытия меню при клике вне его области */}
          {/* <div 
          className={`${s.overlay} ${nav ? s.active_overlay : ""}`} 
          onClick={() => setNav(false)}>
            <BurgerMenu  nav={nav} setNav={setNav}/>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
