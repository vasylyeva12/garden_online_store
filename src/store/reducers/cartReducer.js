


const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DELETE_ALL = 'DELETE_ALL';

export const addProductToCartAction = product => ({ type: ADD_PRODUCT_TO_CART, payload: product });
export const deleteProductFromCartAction = product_id => ({ type: DELETE_PRODUCT_FROM_CART, payload: product_id });
export const decrementCountAction = product_id => ({ type: DECREMENT_COUNT, payload: product_id });
export const incrementCountAction = product_id => ({ type: INCREMENT_COUNT, payload: product_id });
export const deleteAllAction = () => ({ type: DELETE_ALL });

//Проверяет есть ли продукт в корзине или нету
const checkProduct = (state, payload) => {
    const target = state.find(el => el.id === payload.id); //Находим объект по id, сверем id в обїекте с id payload
// target:
// 1. {} - если товар есть в корзине
// 2. undefined - если товара нет в корзине
    if (target) {
        target.count++;
        return [...state];
    } else {
        return [...state, { ...payload, count: 1 }];
    }
};

//Вытаскиваем из localStorage, при этом 'cart' это ключ, а JSON.parse превращает стоку снова в массив. Или вернет пустой массив (пустую страницу), если в корзине товара нет

const defaultState = JSON.parse(localStorage.getItem('cart')) || [];


export const cartReducer = (state=[], action) => {
    if(action.type === ADD_PRODUCT_TO_CART){
        return checkProduct(state, action.payload)
    } else if (action.type === DELETE_PRODUCT_FROM_CART){
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === INCREMENT_COUNT){
        state.find(el => el.id === action.payload).count++
        return [...state]
    } else if (action.type === DECREMENT_COUNT){
        const target = state.find(el => el.id === action.payload);

        if(target.count > 1) {
            target.count--;
            return [...state]
        } else {
            return state.filter(el => el.id !== action.payload)
        }
        
    } else if (action.type === DELETE_ALL){
        return []
    }
    return state
}


// const initialState = {
//   cartItems: [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

// // Экшены для управления корзиной

// const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
// const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
// const INCREASE_CART = "INCREASE_CART";
// const DECREASE_CART = "DECREASE_CART";
// const CLEAR_CART = "CLEAR_CART";
// const GET_TOTALS = "GET_TOTALS";

// // Добавление товара в корзину
// export const addProductToCartAction = (product) => (dispatch, getState) => {
//   const state = getState();
//   const existingProductIndex = state.cart.cartItems.findIndex(
//     (item) => item.id === product.id
//   );
//   let updateCartItems = [...state.cart.cartItems];
//   if (existingProductIndex === -1) {
//     //добавляем новый товар, если его еще нет в корзине
//     updateCartItems.push({ ...product, cartQuantity: 1 });
//   }
//   dispatch({
//     type: ADD_PRODUCT_TO_CART,
//     payload: updateCartItems,
//   });
// };

// //Удаление товара из корзины
// export const deleteProductFromCartAction = (product_id) => (dispatch, getState) => {
//     const state = getState();
//     const updateCartItems = state.cart.cartItems.filter(
//       (item) => item.id !== product_id
//     );

//     dispatch({
//       type: DELETE_PRODUCT_FROM_CART,
//       payload: updateCartItems,
//     });
//   };

// // Увеличение количества товара
// export const inscreaseCartAction = (id) => (dispatch, getState) => {
//   const state = getState();
//   const updateCartItems = state.cart.cartItems.map((item) =>
//     item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
//   );

//   dispatch({
//     type: INCREASE_CART,
//     payload: updateCartItems,
//   });
// };

// // Уменьшение количества товара

// export const decreaseCartAction = (id) => (dispatch, getState) => {
//   const state = getState();
//   const updateCartItems = state.cart.cartItems.map((item) =>
//     item.id === id && item.cartQuantity > 1
//       ? { ...item, cartQuantity: item.cartQuantity - 1 }
//       : item
//   );
//   dispatch({
//     type: DECREASE_CART,
//     payload: updateCartItems,
//   });
// };

// // Очистка корзины
// export const clearCartAction = () => (dispatch) => {
//   dispatch({
//     type: CLEAR_CART,
//   });
// };

// // Получение общей стоимости и количества товаров в корзине

// export const getTotalsAction = () => (dispatch, getState) => {
//   const state = getState();
//   const totalAmount = state.cart.cartItems.reduce((total, item) => {
//     const price = item.discont_price ? item.discont_price : item.price;
//     return total + price * item.cartQuantity;
//   }, 0);

//   const totalQuantity = state.cart.cartItems.reduce(
//     (total, item) => total + item.cartQuantity,
//     0
//   );

//   dispatch({
//     type: GET_TOTALS,
//     payload: {
//       cartTotalAmount: Number(totalAmount.toFixed(2)),
//       cartTotalQuantity: totalQuantity,
//     },
//   });
// };




// //Редьюсеры для корзины

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PRODUCT_TO_CART:
//       return {
//         ...state,
//         cartItems: action.payload,
//         cartTotalQuantity: state.cartTotalQuantity + 1,
//       };
//     case DELETE_PRODUCT_FROM_CART:
//       return {
//         ...state,
//         cartItems: action.payload,
//         cartTotalQuantity: state.cartTotalQuantity - 1,
//       };

//     case INCREASE_CART:
//       return {
//         ...state,
//         cartItems: action.payload,
//         cartTotalQuantity: state.cartTotalQuantity + 1,
//       };

//       case DECREASE_CART:
//         return {
//             ...state,
//             cartItems: action.payload,
//             cartTotalQuantity: state.cartTotalQuantity - 1,
//         }
//         case CLEAR_CART:
//             return {
//                 ...state,
//                 cartItems: [],
//                 cartTotalQuantity: 0,
//                 cartTotalAmount: 0,
//             }
//             case GET_TOTALS:
//                 return {
//                     ...state,
//                     cartTotalQuantity: action.payload.cartTotalQuantity,
//                     cartTotalAmount: action.payload.cartTotalAmount,
//                 }
//                 default:
//                     return state
//   }
// };
