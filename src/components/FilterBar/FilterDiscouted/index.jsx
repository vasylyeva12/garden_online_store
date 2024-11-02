import React, { useState } from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { getDiscountedProductsAction } from "../../../store/reducers/productsReducer";

const FilterDiscounded = () => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const handleCheck = () => setChecked(!checked);
    const handleClick = (event) => dispatch(getDiscountedProductsAction(event.target.checked));
  return (
    <div className={s.checkbox_container}>
      <span>Discounted item</span>
      <div className={s.checkbox}>
        <input 
        id="checkbox"
        type="checkbox"
        onChange={handleCheck}
        checked={checked}
        onClick={handleClick} />
        <label 
        className={s.custom_checkbox}
        htmlFor="checkbox"
        ></label>
      </div>     
    </div>
  );
};

export default FilterDiscounded;
