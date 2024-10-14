import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

function CategoryItem({ category }) {
  const categoryUp = category[0].toUpperCase() + category.slice(1);

  return (
    <Link to={`/categories/${category}`} className={s.categories-item}>
      {categoryUp}
    </Link>
  );
}

export default CategoryItem;







