import React from "react";
import TitleBar from "../TitleBar";
import s from "./index.module.css";
import CategoryItem from "../CategoryItem";
import { useSelector } from "react-redux";

export default function CategoriesMainSection() {
  const categories = useSelector((state) => state.categories);
  
  // Ограничиваем количество категорий до 4
  const limitedCategories = categories ? categories.slice(0, 4) : [];


  return (
    <section className={s.categories}>
      <div className="container">
        <TitleBar 
          title="Categories"
          textButton="All categories"
          linkTo="/categories"
        />
        <div className={s.categories_container}>
          {
            limitedCategories
              .filter(el => el.id !== 5) // Фильтрация категории с id 5
              .map(el => <CategoryItem key={el.id} {...el} />)
          }
        </div>
      </div>
    </section>
  );
}