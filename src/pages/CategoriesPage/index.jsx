// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CategoriesList from "../../components/CategoriesList";
// import { getCategories } from "../../requests/categories";
// import ButtonNavigation from "../../components/ButtonNavigation";

// const CategoriesPage = () => {
//   const categoriesState = useSelector((state) => state.categories); // Выбираем наш массив с продуктами

//   const dispatch = useDispatch();

//   useEffect(() => dispatch(getCategories), []);

//   const crumbs = [
//     { label: "Main page", path: "/" },
//     { label: "Categories", path: "/categories" },
//   ];

//   return (
//     <div className="container">
//       <ButtonNavigation crumbs={crumbs} />
//       <h2 className={s.categories_section-title}>Categories</h2>
//       <CategoriesList categories={categoriesState}/>
//     </div>
//   );
// };

// export default CategoriesPage;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "../../components/CategoriesList";
import s from "./index.module.css";

const CategoriesPage = () => {
  const dispatch = useDispatch();

  const getCategories = useSelector(store => store.categories);

  useEffect(() => {
    dispatch(getCategories); 
  }, []);

  return (
    <div className="container">
      {/* <ButtonNavigation crumbs={crumbs} /> */}

      <h2 className={s.title}>Categories</h2>

      <CategoriesList categories={getCategories} />
    </div>
  );
};

export default CategoriesPage;
