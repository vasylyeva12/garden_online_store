import React, { useEffect } from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/ProductsList";
import { getAllProducts } from "../../requests/products";
import { checkPriceAction, loadSortProductsAction } from "../../store/reducers/productsReducer";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";

const AllSalesPage = () => {
  const dispatch = useDispatch();
  const allProductsState = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts);
  }, []);

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
    <div className="container">
      <div className={s.navigation}>
        <Link to="/">
          <div> Main page</div>
        </Link>
        <div className={s.line}></div>
        <Link to="/sales">
          <div>All sales</div>
        </Link>
      </div>

      <h1 className={s.title}>Discounted items</h1>

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
            <option value="price_asc">by price (ASC)</option>
            <option value="price_desc">by price (DESC)</option>
          </select>
        </div>
      </div>
      <div className={`${s.products_list} ${"container"}`}>
        {
          allProductsState
          .filter(el => el.discont_price !== null)
          .filter(el => el.visible)
          .map(el => <ProductItem key={el.id} {...el}/>)
        }
      </div>
    </div>
    
  );
};

export default AllSalesPage;
