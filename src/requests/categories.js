import { loadCategoriesAction } from "../store/reducers/categoriesReducer"

export const getCategories = (dispatch) => {
    fetch('http://localhost:3333/products/categories')
        .then(res => res.json())
        .then(json => dispatch(loadCategoriesAction(json)))
}