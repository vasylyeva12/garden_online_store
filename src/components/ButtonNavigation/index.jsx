import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import s from "./index.module.css"; 
import { getProductsByCategory, getSingleProduct } from "../../requests/products";
import { store } from "../../store/store";

const ButtonNavigation = ({ showOnlyFirstTwoButtons }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id, categoryId } = useParams();

  // Данные из Redux store
  const categoryState = useSelector(store => store.products);
  const productState = useSelector(store => store.product);

  let buttonText = "";
  let linkTo = "";

  // Логика для определения текста и URL кнопки в зависимости от текущего пути
  if (location.pathname.startsWith("/products")) {
    buttonText = "All products";
    linkTo = "/products";
  } else if (location.pathname.startsWith("/categories")) {
    buttonText = "Categories";
    linkTo = "/categories";
  } else if (location.pathname.startsWith("/sales")) {
    buttonText = "All sales";
    linkTo = "/sales";
  } else if (location.pathname.startsWith("/liked")) {
    buttonText = "Liked products";
    linkTo = "/liked";
  }

  // Используем useEffect для загрузки данных при наличии id или categoryId
  useEffect(() => {
    if (categoryId) {
      dispatch(getProductsByCategory(categoryId));
    }
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, [dispatch, categoryId, id]);

  const categoryTitle = categoryState?.category?.title || "";
  const productTitle = productState?.length > 0 ? productState[0].title : "";

  // Установка стилей для отображения кнопок в зависимости от наличия данных
  const categoryButtonStyle = categoryTitle
    ? { display: "block" }
    : { display: "none" };
  const productButtonStyle = productTitle
    ? { display: "block" }
    : { display: "none" };

 

  return (
    <>
      <div className={`${s.navigation_container}`}>
        {!showOnlyFirstTwoButtons && (
          <>
            <Link to="/">
              <button>Main page</button>
            </Link>
            <div className={s.line}></div>
            <Link to={linkTo}>
              <button
                id={categoryTitle || productTitle ? "" : s.last_button}
              >
                {buttonText}
              </button>
            </Link>
          </>
        )}
        <div className={s.line} style={categoryButtonStyle}></div>

        <Link to={`/categories/${categoryId}`}>
          <button
            style={categoryButtonStyle}
            id={productTitle ? "" : s.last_button}
          >
            {categoryTitle}
          </button>
        </Link>
        <div style={productButtonStyle} className={s.line}></div>
        <div>
          <button id={s.last_button} style={productButtonStyle}>
            {productTitle}
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonNavigation;

