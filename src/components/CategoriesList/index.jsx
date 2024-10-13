import React from "react";
import CategoryItem from "../CategoryItem";
import s from "./index.module.css";

function CategoriesList({ categories }) {
  return (
    <div className={s.categories-list}>
      {categories && // отрисовка категорий
            categories
              .slice(0, 4)
              .map((category) => (
                <CategoryItem
                  key={category}
                  category={category}
                />
              ))}
    </div>
  );
}

export default CategoriesList;
