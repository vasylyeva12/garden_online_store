import { loadAllProductsAction } from "../store/reducers/productsReducer"

export const getAllProducts = (dispatch) => {
    fetch('http://localhost:3333/products')
    .then(res => res(json))
    .then(json => dispatch(loadAllProductsAction(json)))
    
}