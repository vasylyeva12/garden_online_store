import React, { useEffect } from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products";
import {
  checkPriceAction,
  loadSortProductsAction,
} from "../../store/reducers/productsReducer";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import ButtonNavigation from "../../components/ButtonNavigation";
import FilterSort from "../../components/FilterSort";

const AllSalesPage = () => {
  const dispatch = useDispatch();
  const allProductsState = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts);
  }, []);

  const order = (event) => {
    dispatch(loadSortProductsAction(event.target.value));
  };

  const check = (event) => {
    event.preventDefault();
    const { min_value, max_value } = event.target;
    const checkProducts = {
      min_value: min_value.value || 0,
      max_value: max_value.value || Infinity,
    };
    dispatch(checkPriceAction(checkProducts));
    event.target.reset();
  };

  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false} />

      <h1 className={s.title}>Discounted items</h1>
      <FilterSort />

      <div className={`${s.products_list} `}>
        {allProductsState
          .filter((el) => el.discont_price !== null)
          .filter((el) => el.visible)
          .map((el) => (
            <ProductItem key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
};

export default AllSalesPage;
