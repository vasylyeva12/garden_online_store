import React, { useEffect } from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscountedProducts } from "../../requests/products";
import ProductsList from "../../components/ProductsList";
import ProductItem from "../../components/ProductItem";
// import ProductList from '../../components/ProductList'

const AllSalesPage = () => {
  const dispatch = useDispatch();
  const { discountedProducts, loading, error } = useSelector(
    (state) => state.discounted
  );

  useEffect(() => {
    dispatch(fetchDiscountedProducts);
  }, [dispatch]);

  if (loading) {
    return <p>Loading products ...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="container">
      <h1 className={s.title}>Discounted items</h1>
      <ProductsList products={discountedProducts} />
    </div>
  );
};

export default AllSalesPage;
