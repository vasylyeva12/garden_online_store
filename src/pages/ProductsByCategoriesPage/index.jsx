import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../requests/products"; // Убедитесь, что путь к функции правильный
import { Link, useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
import { changeStatusAction } from "../../store/reducers/productsByCategoryReducer";
import { getCategories } from "../../requests/categories";
import s from "./index.module.css";
import FilterPrice from "../../components/FilterBar/FilterPrice";
import FilterDiscounded from "../../components/FilterBar/FilterDiscouted";
import FilterSort from "../../components/FilterBar/FilterSort";


const ProductsByCategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Изменяем статус загрузки и загружаем продукты по категории
    dispatch(changeStatusAction());

    dispatch(getProductsByCategory(id));
  }, [dispatch]); // Добавили id в зависимости для перезагрузки при его изменении
  // Получаем состояние продуктов по категории из Redux
  
  const productsByCategoryState = useSelector((store) => store.productsByCategory);

  const categoriesState = useSelector((store) => store.categories);
  const category = categoriesState[id - 1]

 

  // useEffect(() => {
  //   dispatch(getCategories);
  // }, []);

 

  const { status, data } = productsByCategoryState; // Извлекаем статус и данные из состояния


  // console.log(productsByCategoryState);
  return (
    <div className="container">
      {category && category.title ? (
        <div className={s.breadcrumbs}>
          <Link to="/" className={s.crumb_box}>
            <span className={s.crumb_text}>Main page</span>
          </Link>
          <div className={s.line}></div>
          <Link to="/categories" className={s.crumb_box}>
            <span className={s.crumb_text}>Categories</span>
          </Link>
          <div className={s.line}></div>
          <div className={s.crumb_box}>
            <span className={s.crumb_text_black}>{category.title}</span>
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