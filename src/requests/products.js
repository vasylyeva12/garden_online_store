import { 
    fetchDiscountedProductsFailure, 
    fetchDiscountedProductsRequest, 
    fetchDiscountedProductsSuccess } from "../store/reducers/discountedReducer"
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer"
import { loadAllProductsAction } from "../store/reducers/productsReducer"
import { loadSingleProductAction } from "../store/reducers/singleProductReducer"

export const getAllProducts = (dispatch) => {
    fetch('http://localhost:3333/products/all')
    .then(res => res.json())
    .then(json => dispatch(loadAllProductsAction(json)))
    
}

export const getProductsByCategory = (categoryId) => {
    return dispatch => {
        fetch(`http://localhost:3333/products/category/${categoryId}`)
            .then(res => res.json())
            .then(json => dispatch(loadProductsByCategoryAction(json)))
    }  
}

export const getSingleProduct = (product_id) => {
    return dispatch => {
        fetch(`http://localhost:3333/products/${product_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)))
            .catch(error => console.error('Error fetching product:', error));
    }  
}

export const fetchDiscountedProducts = () => {
    return async (dispatch) => {
      dispatch(fetchDiscountedProductsRequest());
      try {
        const response = await fetch(`http://localhost:3333/products/sales${id}`);  
        const data = await response.json();
  
        dispatch(fetchDiscountedProductsSuccess(data));
      } catch (error) {
        dispatch(fetchDiscountedProductsFailure(error.message));
      }
    };
  };