import React, { useEffect } from "react";
import CategoryItem from "../CategoryItem";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../requests/categories";


function CategoriesList() {
  const dispatch = useDispatch();

  const getCategoriesState = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(getCategories);
  }, [dispatch]);

  return (
      <div className={s.container}>
        {getCategoriesState
          .map((el) => (
            <CategoryItem key={el.id} {...el} />
          ))}
      </div>
  );
}


export default CategoriesList;
