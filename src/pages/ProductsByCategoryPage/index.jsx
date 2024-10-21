import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../requests/products"; 
import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
import { changeStatusAction } from "../../store/reducers/productsByCategoryReducer";

const ProductsByCategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Получаем состояние продуктов по категории из Redux
  const productsByCategoryState = useSelector(
    (store) => store.productsByCategory
  );

  useEffect(() => {
    // Изменяем статус загрузки и загружаем продукты по категории
    dispatch(changeStatusAction());
    dispatch(getProductsByCategory(id));
  }, [dispatch, id]); // Добавили id в зависимости для перезагрузки при его изменении

  const { status, data } = productsByCategoryState; // Извлекаем статус и данные из состояния

  return (
    <div className="container">
      <div>
        {status === "loading" ? 
          <p>Products are loading...</p> 
         : (
          <ProductsList products={data} /> // Передаем данные в компонент ProductsList
        )}
      </div>
    </div>
  );
};

export default ProductsByCategoryPage;
