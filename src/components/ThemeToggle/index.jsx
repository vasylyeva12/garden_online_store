import React from "react";
import sun from "../../media/sun.svg";
import moon from "../../media/moon.svg";
import s from "./index.module.css";

const ThemeToggle = () => {
  return (
    <div className={s.theme_toggle}>
      <div className={s.theme_container}>
        <img src={sun} alt="sun" />
        {/* <img src={moon} alt="moon" /> */}
      </div>
    </div>
  );
};

export default ThemeToggle;
