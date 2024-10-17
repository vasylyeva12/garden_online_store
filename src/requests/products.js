import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer";
import {  
  loadAllProductsAction,
} from "../store/reducers/productsReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";

export const getAllProducts = (dispatch) => {
    fetch('http://localhost:3333/products/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
};

export const getProductsByCategory = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/products/categoryId/${id}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadProductsByCategoryAction(json)));
  };
};

export const getSingleProduct = (product_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/products/${product_id}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadSingleProductAction(json)))
      .catch((error) => console.error("Error fetching product:", error));
  };
};
