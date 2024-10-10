import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer } from './reducers/productsReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';


const rootReducer = combineReducers({
   products: productsReducer,
   categories: categoriesReducer,
   productsByCategory: productsByCategoryReducer,
   singleProduct: singleProductReducer,
   cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));