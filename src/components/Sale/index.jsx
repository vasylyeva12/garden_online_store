import React, { useEffect } from "react";
import s from "./index.module.css";
import TitleBar from "../TitleBar";
import { Link } from "react-router-dom";
import ProductsList from "../ProductsList";
import { getAllProducts } from "../../requests/products";
import { useSelector } from "react-redux";


const Sale = () => {
  // const { products } = useSelector((state) => state.products);
  // useEffect(() => {
  //   dispatch(getAllProducts);
  // }, []);

  // const discountedProducts = products?.filter(
  //   (product) => product.discont_price !== null
  // );

  return (
    <div className={`${s.sale_container} container`}>
      <TitleBar title="Sale" textButton="All sales" linkTo="/sales" />
      <div className={s.hidden_btn}>
        <Link to="/sales">
          <button>All sales</button>
        </Link>
        {/* <ProductsList products={discountedProducts}/> */}
      </div>
    </div>
  );
};

export default Sale;
