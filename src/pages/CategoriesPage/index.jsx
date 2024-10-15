import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "../../components/CategoriesList";
import s from "./index.module.css";

const CategoriesPage = () => {
  const dispatch = useDispatch();

  const getCategories = useSelector(store => store.categories);

  useEffect(() => {
    dispatch(getCategories); 
  }, []);

  return (
    <div className="container">
      {/* <ButtonNavigation crumbs={crumbs} /> */}

      <h2 className={s.title}>Categories</h2>

      <CategoriesList categories={getCategories} />
    </div>
  );
};

export default CategoriesPage;
