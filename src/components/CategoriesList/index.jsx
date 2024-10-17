import React, { useEffect } from "react";
import CategoryItem from "../CategoryItem";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../requests/categories";
import { Link } from "react-router-dom";

function CategoriesList() {
  const dispatch = useDispatch();

  const getCategoriesState = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(getCategories);
  }, [dispatch]);

  return (
    <div className={s.categories_list}>
      <div className={s.head}>
        <h2>Categories</h2>
        <div className={s.line}></div>
        <Link to="/categories">
          <div className={s.title}> All categories</div>
        </Link>
      </div>
      <div className={s.container}>
        {getCategoriesState
          .map((el) => (
            <CategoryItem key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
}


export default CategoriesList;
