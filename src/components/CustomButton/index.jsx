import React from "react";
import s from "./index.module.css";

const CustomButton = ({ onClick, buttonStyle, buttonText }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <div>
      <button className={`${s.btn} ${buttonStyle}`} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default CustomButton;
