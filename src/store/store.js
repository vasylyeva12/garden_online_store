import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer } from './reducers/productsReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';
import { likedProductsReducer } from './reducers/likedProductsReducer';





const rootReducer = combineReducers({
   products: productsReducer,
   categories: categoriesReducer,
   productsByCategory: productsByCategoryReducer,
   product: singleProductReducer,
   cart: cartReducer,
   likedProducts: likedProductsReducer,
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));