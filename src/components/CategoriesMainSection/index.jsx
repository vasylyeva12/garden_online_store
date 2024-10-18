import React, { useEffect } from "react";
import TitleBar from "../TitleBar";
import s from "./index.module.css";
import CategoryItem from "../CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../requests/categories";

export default function CategoriesMainSection() {
  
  const categoriesState = useSelector((store) => store.categories);
  const dispatch = useDispatch()

  useEffect(() => {
dispatch(getCategories)
  }, [dispatch])

  // const limitedCategories = categoriesState ? categoriesState.slice(0, 4) : [];

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
            categoriesState
              .filter(el => el.id !== 4) // Фильтрация категории с id 5
              .map(el => <CategoryItem key={el.id} {...el} />)
          }
        </div>
      </div>
    </section>
  );
}