import React from 'react'
import s from './index.module.css'
import { sortAllProductsAction } from '../../../store/reducers/productsReducer';
import { useDispatch } from 'react-redux';

const FilterSort = () => {
    const dispatch = useDispatch();
    const handleOrder = (event) => {
        dispatch(sortAllProductsAction(event.target.value));
      };
  return (
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
  )
}

export default FilterSort