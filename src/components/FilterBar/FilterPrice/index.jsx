import React from 'react'
import s from './index.module.css'

const FilterPrice = () => {
    const handleFilter = (event) => {
        event.preventDefault();
        const { min_price, max_price } = event.target;
        const priceValues = {
          min: min_price.value || 0,
          max: max_price.value || Infinity,
        };
        dispatch(filterByPriceAction(priceValues));        
       
        event.target.reset();
      };
      
  return (
    <div className={s.price_filter}>
    <p>Price</p>
    <form onSubmit={handleFilter} className={s.form}>
      <input type="number" placeholder="from" name="min_price" />
      <input type="number" placeholder="to" name="max_price" />
      <button className={s.btn_hidden}></button>
    </form>
  </div>
  )
}

export default FilterPrice