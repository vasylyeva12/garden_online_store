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
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { getCategories } from "../../requests/categories";
import CategoryItem from "../../components/CategoryItem";
import ButtonNavigation from "../../components/ButtonNavigation";

const CategoriesPage = () => {
  const dispatch = useDispatch();

  const {data: categories, isLoading} = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch(getCategories);
  }, []);

  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false}/>
      {/* <div className={s.buttons}>
        <Link to="/">
          <div className={s.navigation}>Main page</div>
        </Link>
        <div className={s.line}></div>
        <Link to="/categories">
          <div className={s.navigation}>Categories</div>
        </Link>
      </div> */}

      <div className={s.categories}>
        <h2 className={s.title}> Categories </h2>
        <div className={s.categories_container}>
          {categories.map((el) => (
            <CategoryItem key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
