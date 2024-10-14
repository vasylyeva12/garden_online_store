import React from "react";
import s from "./index.module.css";
import TitleBar from "../TitleBar";
import { fetchDiscountedProducts } from "../../requests/products";
import { Link } from "react-router-dom";

const Sale = () => {
  const { discountedProducts, loading, error } = fetchDiscountedProducts();
  if (error) return <div>Error: {error}</div>;
  if (!discountedProducts) return <div>No products available</div>;

  return (
    <div className={`${s.sale_container} container`}>
      <TitleBar title="Sale" textButton="All sales" linkTo="/sales" />
      <div className={s.hidden_btn}>
        <Link to="/sales">
          <button>All sales</button>
        </Link>
      </div>
    </div>
  );
};

export default Sale;
