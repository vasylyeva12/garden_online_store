import React from "react";
import s from "./index.module.css";
import ProductItem from "../ProductItem";


const ProductsList = ({ products }) => {
  return (
    <div className={s.products_list}>
    
      {Array.isArray(products) && products
      .filter(el => el.visible)
      .map((el) => (
        <ProductItem key={el.id} {...el} />
      ))}
    </div>
  );
};

export default ProductsList;
