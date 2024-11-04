import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./index.module.css";
import CategoryItem from "../../components/CategoryItem";
import ButtonNavigation from "../../components/ButtonNavigation";


const CategoriesPage = () => { 

  const categoriesState = useSelector((store) => store.categories);


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
