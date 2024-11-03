
import { loadCategoriesAction } from "../store/reducers/categoriesReducer";

// const baseUrl = "http://127.0.0.1:3333";
 const URL = import.meta.env.APP_API_URL

export const getCategories = (dispatch) => {
    fetch(`${URL}/categories/all`)
        .then(res => res.json())
        .then(json => dispatch(loadCategoriesAction(json)))
}


