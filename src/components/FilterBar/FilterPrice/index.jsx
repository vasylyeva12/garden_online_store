import React, { useEffect, useState } from 'react'
import s from './index.module.css'
import { filterByPriceAction } from '../../../store/reducers/productsReducer'
import { useDispatch } from 'react-redux'

const FilterPrice = () => {
    const dispatch = useDispatch()

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(Infinity)

    const handleMinValue = e => setMinValue(e.target.value || 0)
    const handleMaxValue= e => setMaxValue(e.target.value || Infinity)

    useEffect(() => {
        dispatch(filterByPriceAction({
          min: minValue,
          max: maxValue
        }))
      }, [minValue, maxValue]);
   

  return (
    <div className={s.price_filter}>
    <p>Price</p>
    <form  className={s.form}>
      <input type="number"  placeholder="from"  name="min_price"  onChange={handleMinValue} />
      <input type="number"  placeholder="to"    name="max_price"  onChange={handleMaxValue} />
      <button className={s.btn_hidden}></button>
    </form>
  </div>
  )
}

export default FilterPrice