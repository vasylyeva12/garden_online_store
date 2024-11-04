import React, { useEffect } from 'react'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../requests/products';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem';
import TitleBar from '../TitleBar';

const SaleMainSection = () => {
    const AllProductsState = useSelector((store) => store.products);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllProducts);
    }, [dispatch]);
  return (
    <section className={s.sale_container}>
    <div className="container">
      <TitleBar title="Sale" textButton="All sales" linkTo="/sales" />

      <div className={s.card_container}>
        {AllProductsState.filter((el) => el.discont_price !== null)
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .map((el) => (
            <ProductItem key={el.id} {...el} />
          ))}
      </div>

      <div className={s.hidden_btn}>
        <Link to="/sales">
          <button>All sales</button>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default SaleMainSection