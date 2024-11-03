import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import {  
  loadAllProductsAction,
} from "../store/reducers/productsReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";
const URL = import.meta.env.APP_API_URL

export const getAllProducts = (dispatch) => {
    fetch(`${URL}/products/all`)
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
};

export const getProductsByCategory = (id) => {
  return (dispatch) => {
    fetch(`${URL}/categories/${id}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadProductsByCategoryAction(json)));
  };
};

export const getSingleProduct = (product_id) => {
  return (dispatch) => {
    fetch(`${URL}/products/${product_id}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadSingleProductAction(json)))
      .catch((error) => console.error("Error fetching product:", error));
  };
};
