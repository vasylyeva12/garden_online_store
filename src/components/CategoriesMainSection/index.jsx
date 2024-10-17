import React from "react";
import TitleBar from "../TitleBar";
import s from "./index.module.css";
import CategoryItem from "../CategoryItem";
import { useSelector } from "react-redux";


export default function CategoriesMainSection() {
  const { categories } = useSelector((state) => state.categories);

  const limitedCategories = categories ? categories.slice(0, 4) : [];

  return (
    <div className={s.wrapper}>
      <div className="container">
      <TitleBar title="Categories"
          textButton="All categories"
          linkTo="/categories"
        />
        <div className={s.categories_container}>
            {
                  
               limitedCategories.filter(el => el.id !== 4).map(el => <CategoryItem key={el.id} {...el}/>)
                  
            }
         </div>
      </div>
    </div>
  );
}