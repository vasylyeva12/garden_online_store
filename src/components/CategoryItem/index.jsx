import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.css";

const CategoryItem = ({ id, image, title }) => { 
  const apiUrl = import.meta.env.APP_API_URL;
  return (
    <div className={s.categories_wrapper}>
      <Link to={`/categories/${id}`}>
        <div className={s.image_wrapper}>
          <img
            className={s.images}
            src={`${apiUrl}/${image}`} 
            alt={title}
          />
        <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;


