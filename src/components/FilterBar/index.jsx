import React, { useState } from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import {
  filterByPriceAction,  
  getDiscountedProductsAction,
  sortAllProductsAction,
} from "../../store/reducers/productsReducer";

const FilterBar = () => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const handleCheck = () => setChecked(!checked);
  const handleClick = (event) => dispatch(getDiscountedProductsAction(event.target.checked));

  const handleOrder = (event) => {
    dispatch(sortAllProductsAction(event.target.value));
  };

  const handleFilter = (event) => {
    event.preventDefault();
    const { min_price, max_price } = event.target;
    const priceValues = {
      min: min_price.value || 0,
      max: max_price.value || Infinity,
    };
    console.log( dispatch(filterByPriceAction(priceValues)));
    
   
    // event.target.reset();
  };

  return (
    <div className={s.filters_container}>
      <div className={s.price_filter}>
        <p>Price</p>
        <form onSubmit={handleFilter} className={s.form}>
          <input type="number" placeholder="from" name="min_price" />
          <input type="number" placeholder="to" name="max_price" />
          <button className={s.btn_hidden}></button>
        </form>
      </div>

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

      <div className={s.sorted}>
        <span>Sorted</span>
        <select onInput={handleOrder}>
          <option value="default" defaultValue>
            by default
          </option>
          <option value="title">by name (A-Z)</option>
          <option value="price_low">price: high-low</option>
          <option value="price_high">price: low-high</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
