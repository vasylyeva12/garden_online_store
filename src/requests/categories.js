import { loadCategoriesAction, setCategoriesLoadingAction } from "../store/reducers/categoriesReducer";

export const getCategories = (dispatch) => {
  fetch("http://localhost:3333/categories/all")
    .then((res) => res.json())
    .then((json) => {
      // Загружаем данные
      dispatch(loadCategoriesAction(json));
      // Отключаем состояние загрузки
      dispatch(setCategoriesLoadingAction(false));
    });
};
