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
    <div className={s.checkbox}>
      <span>Discounted item</span>
      <label className={s.label_checkbox}>
        <input
          className={s.input_checkbox}
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          onClick={handleClick}
        />
        <span></span>
      </label>
    </div>
  );
};

export default FilterDiscounded;
