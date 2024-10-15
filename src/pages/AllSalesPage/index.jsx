import React, { useEffect } from "react";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/ProductsList";


const AllSalesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []); 
  
  return (
    <div className="container">
      <h1 className={s.title}>Discounted items</h1>
     
     
    </div>
  );
};

export default AllSalesPage;
