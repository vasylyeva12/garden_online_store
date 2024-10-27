import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCartAction } from '../../store/reducers/cartReducer';

const ButtonAddToCard = ({ id, image, title, price, discont_price }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const handleAddToCart = () => {
    dispatch(addProductToCartAction({ id, image, title, price, discont_price }));
    navigate('/cart');  // После добавления товара переходим на страницу корзины
  };

  return (
    <div>
        <button className={s.btn} onClick={handleAddToCart}>
        Add to card
        </button>
    </div>
  )
}

export default ButtonAddToCard