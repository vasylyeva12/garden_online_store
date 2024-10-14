import React from "react";
import TitleBar from "../TitleBar";
import CategoriesList from "../CategoriesList";
import s from './index.module.css'


function CategoriesMainSection() {
  return (
    <div className={`${s.categories_container} container`}>
      <TitleBar
        title="Categories"
        textButton="All categories"
        linkTo="/categories"
      />
      <div>
      <CategoriesList />
      </div>
    </div>
  );
}

export default CategoriesMainSection;

