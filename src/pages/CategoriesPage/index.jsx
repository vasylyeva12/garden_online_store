import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { getCategories } from "../../requests/categories";
import CategoryItem from "../../components/CategoryItem";
import ButtonNavigation from "../../components/ButtonNavigation";

const CategoriesPage = () => {
  
  const dispatch = useDispatch();

  const categoriesState = useSelector((store) => store.categories);

  console.log(categoriesState);
  

  useEffect(() => {
    dispatch(getCategories);
  }, []);

  return (
    <div className='container'>
      <ButtonNavigation />     

      <div className={s.categories}>
        <h2 className={s.title}> Categories </h2>
        <div className={s.categories_container}>
          {categoriesState.map((el) => (
            <CategoryItem key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
