
import { loadCategoriesAction } from "../store/reducers/categoriesReducer";

const baseUrl = "http://127.0.0.1:3333";

export const getCategories = (dispatch) => {
    fetch(`${baseUrl}/categories/all`)
        .then(res => res.json())
        .then(json => dispatch(loadCategoriesAction(json)))
}

// export const getAllCategories = (dispatch) => {
//     fetch(${backendUrl}/categories/all) //Запрос всех категорий
//       .then(res => res.json())
//       .then(json => dispatch(loadCategoriesAction(json)))
//       .catch(err => console.error('Error fetching categories:', err));
//   };
