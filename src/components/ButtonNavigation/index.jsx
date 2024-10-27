import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import s from "./index.module.css";
import {
  getProductsByCategory,
  getSingleProduct,
} from "../../requests/products";


const ButtonNavigation = ({ showOnlyFirstTwoButtons }) => {
  const location = useLocation();
  
  const dispatch = useDispatch();
  // const { id, categoryId } = useParams();
  const id = useParams().id;
  const categoryId = useParams().categoryId;


  // Данные из Redux store
  const productsByCategoryState = useSelector((store) => store.productsByCategory);
  const singleProductState = useSelector((store) => store.product);

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

  // Используем useEffect для загрузки данных при наличии id 

  // useEffect(() => {
    
  //   if (id) {
  //     dispatch(getSingleProduct(id));
  //      }
    
  // }, [dispatch, id]);


  const categoryTitle = 
  productsByCategoryState && productsByCategoryState.category ? productsByCategoryState.category.title : "";
  const productTitle = 
  singleProductState && singleProductState.length > 0 ? singleProductState[0].title : "";

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
              <button id={categoryTitle || productTitle ? "" : s.last_button}>
                {buttonText}
              </button>
            </Link>
          </>
        )}
        <div className={s.line} style={categoryButtonStyle}></div>
        <Link to={`/categories/${id}`}>
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
  )
}
export default ButtonNavigation;
