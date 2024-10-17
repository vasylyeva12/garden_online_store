import React, { useEffect, useState } from "react";
import s from "./index.module.css";
import ProductItem from "../ProductItem";

const ProductsList = ({ products }) => { 

  const [alProducts, setAllproducts] = useState(products)

  useEffect(() => {
  const discountedProducts = products.filter(
    (product) => product.discont_price
  )
  }, [products])

  return (
    <div className={s.products_list}>
      {
        products.map(el => <ProductItem key={el.id} {...el} />)
      }
    </div>
  );
};

export default ProductsList;
