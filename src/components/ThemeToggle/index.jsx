import React, { useContext } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import s from "./index.module.css";
import { ThemeContext } from "../../context/ThemeContext";


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={s.theme_toggle} onClick={toggleTheme}>
      {theme ? (
        <div className={s.themeDark_container}>
          <IoSunnyOutline className={s.sun} />
          <div className={s.ellipse_dark}></div>
        </div>
      ) : (
        <div className={s.themeLight_container}>
          <div className={s.ellipse}></div>
          <IoMoonOutline className={s.moon} />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;