import React, { useEffect } from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../requests/products";
import ProductItem from "../../components/ProductItem";
import ButtonNavigation from "../../components/ButtonNavigation";
import FilterPrice from "../../components/FilterBar/FilterPrice";
import FilterSort from "../../components/FilterBar/FilterSort";

const AllSalesPage = () => {
  const dispatch = useDispatch();
  const allProductsState = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts);
  }, []);

  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false} />
      
      <h1 className={s.title}>Discounted items</h1>

      <div className='filters_bar'>
        <FilterPrice />
        <FilterSort />
      </div>

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
