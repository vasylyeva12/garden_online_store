import React from "react";
import CategoryItem from "../CategoryItem";
import s from "./index.module.css";


// export default function CategoriesList() {

  
//   const { categories } = useSelector((state) => state.categories);
  
//     return (
//     <div className={s.categories_wrapper}>
//       <div className="container">
//       <div className={s.categories_list}>
//       <Link 
//       key={category.id}
//       to={/categories/${category.id}}
//       className={s.card_category}>
//         <CategoryItem {...category} />

//       </Link>
//       </div>
//       </div>
//     </div>
//   );
// }
function CategoriesList({ categories }) {

  // const { categories } = useSelector((state) => state.categories);
  return (
    <div className={s.categories_list}>
      {
        categories.map(el => <CategoryItem {...categories}/>)
      }
    </div>
  );
}

export default CategoriesList;