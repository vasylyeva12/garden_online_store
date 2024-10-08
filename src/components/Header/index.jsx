import React, { useState } from "react";
import s from "./index.module.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header_area}>
          <Logo />
          <NavMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
