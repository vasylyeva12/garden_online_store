import React, { useEffect } from "react";
import s from "./index.module.css";
import ProductsList from "../../components/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products";
import ButtonNavigation from "../../components/ButtonNavigation";
import FilterBar from "../../components/FilterBar";

const AllProductsPage = () => {
  const allProductsState = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts);
  }, []);

  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false} />
      <h1 className={s.title}>All products</h1>
      <FilterBar />
      <ProductsList products={allProductsState} />
    </div>
  );
};

export default AllProductsPage;
