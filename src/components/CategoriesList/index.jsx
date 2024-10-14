import React from "react";
import CategoryItem from "../CategoryItem";
import s from "./index.module.css";

function CategoriesList({ categories }) {
  return (
    <div className={s.categories_list}>
      
      {/* {categories && // отрисовка категорий
            categories
              .slice(0, 4)
              .map((category) => (
                <CategoryItem
                  key={category}
                  category={category}
                />
              ))} */}
               {
            // categories.map(el => <CategoryItem key={el} category={el} />)
        }
    </div>
  );
}

export default CategoriesList;
