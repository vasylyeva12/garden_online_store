import React from "react";
import s from "./index.module.css";
import CategoryItem from "../CategoryItem";

function CategoriesList({ categories }) {
  return (
    <div>
      {categories.map((el) => (
        <CategoryItem key={el.id} {...el} />
      ))}
    </div>
  );
}

export default CategoriesList;
