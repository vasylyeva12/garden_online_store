import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../requests/products"; // Убедитесь, что путь к функции правильный
import { Link, useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
import { changeStatusAction } from "../../store/reducers/productsByCategoryReducer";
<<<<<<< HEAD:src/pages/ProductsByCategoryPage/index.jsx
import { getCategories } from "../../requests/categories";
import s from "./index.module.css";
import FilterPrice from "../../components/FilterBar/FilterPrice";
import FilterDiscounded from "../../components/FilterBar/FilterDiscouted";
import FilterSort from "../../components/FilterBar/FilterSort";
=======
>>>>>>> develpoment:src/pages/ProductsByCategoriesPage/index.jsx

const ProductsByCategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Получаем состояние продуктов по категории из Redux
  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );
  const categoriesState = useSelector((store) => store.categories);
  const category = categoriesState[id - 1];

  useEffect(() => {
    dispatch(getCategories);
  }, []);

  useEffect(() => {
    // Изменяем статус загрузки и загружаем продукты по категории
    dispatch(changeStatusAction());
<<<<<<< HEAD:src/pages/ProductsByCategoryPage/index.jsx

=======
>>>>>>> develpoment:src/pages/ProductsByCategoriesPage/index.jsx
    dispatch(getProductsByCategory(id));
  }, [dispatch, id]); // Добавили id в зависимости для перезагрузки при его изменении

  const { status, data } = productsByCategoryState; // Извлекаем статус и данные из состояния

<<<<<<< HEAD:src/pages/ProductsByCategoryPage/index.jsx
  // console.log(productsByCategoryState);
  return (
    <div className="container">
      {category && category.title ? (
        <div className={s.breadcrumbs}>
          <Link to="/" className={s.crumbBox}>
            <span className={s.crumbText}>Main page</span>
          </Link>
          <div className={s.line}></div>
          <Link to="/categories" className={s.crumbBox}>
            <span className={s.crumbText}>Categories</span>
          </Link>
          <div className={s.line}></div>
          <div className={s.crumbBox}>
            <span className={s.crumbTextBlack}>{category.title}</span>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className={s.filtered}>
        <FilterPrice />
        <FilterDiscounded />
        <FilterSort />
      </div>
=======
  return (
    <div className="container">
>>>>>>> develpoment:src/pages/ProductsByCategoriesPage/index.jsx
      <div>
        {status === "loading" ? (
          <p>Products are loading...</p> // Добавил параграф для текстового отображения
        ) : (
          <ProductsList products={data} /> // Передаем данные в компонент ProductsList
        )}
      </div>
    </div>
  );
};

export default ProductsByCategoryPage;