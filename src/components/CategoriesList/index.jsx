import React from "react";
import CategoryItem from "../CategoryItem";
import s from "./index.module.css";

function CategoriesList({ categories }) {

  // const { categories } = useSelector((state) => state.categories);
  return (
    <div className={s.categories_list}>
      {
        categories.map(el => <CategoryItem {...categories}/>)
      }
    </div>
  );
}

export default CategoriesList;