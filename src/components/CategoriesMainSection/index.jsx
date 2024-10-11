import React from "react";
import TitleBar from "../TitleBar";
import CategoriesList from "../CategoriesList";


function CategoriesMainSection() {
  return (
    <div className={`${s.categories_container} container`}>
      <TitleBar
        title="Categories"
        TextButton="All categories"
        linkTo="/categories"
      />
      <div>
      <CategoriesList />
      </div>
    </div>
  );
}

export default CategoriesMainSection;
