import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

const CategoryItem = ({ id, image, title }) => { 
  return (
    <div className={s.categories_wrapper}>
      <Link to={`/categories/${id}`}>
        <div className={s.image_wrapper}>
          <img
            src={`http://localhost:3333/${image}`} 
            alt={title}
          />
        </div>
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default CategoryItem;


