import React, { useEffect } from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../requests/products';

const FilterSort = () => {
    const dispatch = useDispatch();
    // const allProductsState = useSelector((store) => store.products);
  
    // useEffect(() => {
    //   dispatch(getAllProducts);
    // }, []);
  
    const order = (event) => {
      dispatch(loadSortProductsAction(event.target.value));
    };
  
    const check = event => {
      event.preventDefault();
      const { min_value, max_value } = event.target;
      const checkProducts = {
         min_value: min_value.value || 0,
         max_value: max_value.value || Infinity
      }
      dispatch(checkPriceAction(checkProducts));
      event.target.reset();
   }
  return (
    <div className={s.sort_container}>
    <div className={s.price_filter}>
      <p>Price</p>
      <form onSubmit={check} className={s.form}>
        <input type="number" placeholder="from" name="min_value" />
        <input type="number" placeholder="to" name="max_value" />
        <input type="submit" />
      </form>
    </div>
    <div className={s.sorted}>
      <span>Sorted</span>
      <select onInput={order}>
        <option value="default" defaultValue>
          by default
        </option>
        <option value="name">by name (A-Z)</option>
        <option value="price_asc">price: high-low</option>
        <option value="price_desc">price: low-high</option>
      </select>
    </div>
  </div>
  )
}

export default FilterSort
