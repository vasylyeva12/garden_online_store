import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../requests/products"; // Убедитесь, что путь к функции правильный
import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList";
import { changeStatusAction } from "../../store/reducers/productsByCategoryReducer";
import ButtonNavigation from "../../components/ButtonNavigation";

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
    console.log(id);
    dispatch(getProductsByCategory(id));
  }, [dispatch, id]); // Добавили id в зависимости для перезагрузки при его изменении

  const { status, data } = productsByCategoryState; // Извлекаем статус и данные из состояния

  console.log(productsByCategoryState);
  return (
    <div className="container">

      <ButtonNavigation />
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
