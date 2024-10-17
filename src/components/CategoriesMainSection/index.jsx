import React, { useEffect } from "react";
import TitleBar from "../TitleBar";
import s from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../requests/categories";
import CategoriesList from "../CategoriesList";

export default function CategoriesMainSection() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    // Важно вызвать getCategories как функцию
    dispatch(getCategories());
  }, [dispatch]);

  // Проверяем, есть ли категории, и ограничиваем вывод до 4
  const limitedCategories =
    categories && categories.length > 0 ? categories.slice(0, 5) : [];

  return (
    <div className={s.categories_block}>
      <div className="container">
        <TitleBar
          title="Categories"
          textButton="All categories"
          linkTo="/categories"
        />
        <div className={s.categories_container}>
          {limitedCategories
            .filter((el) => el.id !== 5)
            .map((el) => (
              <CategoriesList key={el.id} {...el} />
            ))}
        </div>
      </div>
    </div>
  );
}
// export default function CategoriesMainSection() {
//   const categories = useSelector((state) => state.categories);

//   const limitedCategories = categories && categories.length > 0 ? categories.slice(0, 4) : [];

//   // const limitedCategories = categories ? categories.slice(0, 4) : [];

//   return (
//     <div className={s.categories_block}>
//       <div className="container">
//         <TitleBar
//           title="Categories"
//           textButton="All categories"
//           linkTo="/categories"
//         />
//         <div className={s.categories_container}>
//           {limitedCategories.map((el) => (
//             <CategoryItem key={el.id} {...el} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
