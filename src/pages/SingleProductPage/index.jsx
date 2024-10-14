import React, { useState } from "react";
import s from "./index.module.css";
import ButtonNavigation from "../../components/ButtonNavigation";
import SingleProduct from "../../components/SingleProduct";

const SingleProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); /*for modal window */

  return (
    <div className='container'>
      <ButtonNavigation />
      <SingleProduct />
     
    </div>
  );
};

export default SingleProductPage;
