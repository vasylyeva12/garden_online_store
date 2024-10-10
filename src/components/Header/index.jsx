import React, { useState } from "react";
import s from "./index.module.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import BurgerMenu from "../BurgerMenu";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header_section}>
          <Logo className={s.logo} />
          <NavMenu />
          <div>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
