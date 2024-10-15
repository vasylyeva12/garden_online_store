import React from "react";
import CategoryItem from "../CategoryItem";
import s from "./index.module.css";

function CategoriesList({ categories }) {

  return (
    <div className={s.categories_list}>
      {
        categories.map(el => <CategoryItem key={el.id} {...el} />)
      }

    </div>
  );
}

export default CategoriesList;

// import React from 'react'
// import CategoryCard from '../CategoryCard'

// export default function CategoriesContainer({ categories }) {
//   return (
//     <div>
//         {
//             categories.map(el => <CategoryCard  {...categories} />)
//         }
//     </div>
//   )
// }