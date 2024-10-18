import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { getCategories } from "../../requests/categories";
import CategoryItem from "../../components/CategoryItem";

const CategoriesPage = () => {

  
  const dispatch = useDispatch();

  const getCategoriesState = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(getCategories);
  }, []);

  return (
    <div className='container'>
      <div className={s.buttons}>
        <Link to="/">
          <div className={s.navigation}>Main page</div>
        </Link>
        <div className={s.line}></div>
        <Link to="/categories">
          <div className={s.navigation}>Categories</div>
        </Link>
      </div>

      <div className={s.categories}>
        <h2 className={s.title}> Categories </h2>
        <div className={s.categories_container}>
          {getCategoriesState.map((el) => (
            <CategoryItem key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
