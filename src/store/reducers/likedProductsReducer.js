// const initialState = {
//   likedProducts: [] 
// };


// const ADD_LIKED_PRODUCT = 'ADD_LIKED_PRODUCT';
// const DELETE_LIKED_PRODUCT = 'DELETE_LIKED_PRODUCT';

// // Действия для добавления и удаления избранного товара
// export const addLikedProductAction = (product) => ({
//   type: ADD_LIKED_PRODUCT,
//   payload: product,
// });

// export const deleteLikedProductAction = (product_id) => ({
//   type: DELETE_LIKED_PRODUCT,
//   payload: product_id,
// });

// // Логика для проверки добавления продукта в избранное
// const checkLikedProduct = (state, payload) => {
//   const target = state.likedProducts.find((el) => el.id === payload.id);

//   if (target) {
//     return state; // Если продукт уже есть, возвращаем текущее состояние без изменений
//   } else {
//     return {
//       ...state,
//       likedProducts: [...state.likedProducts, payload], // Добавляем продукт в избранное
//     };
//   }
// };

// // Редьюсер для избранных товаров
// export const likedProductsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_LIKED_PRODUCT:
//       return checkLikedProduct(state, action.payload);
      
//     case DELETE_LIKED_PRODUCT:
//       return {
//         ...state,
//         likedProducts: state.likedProducts.filter((el) => el.id !== action.payload), // Удаляем продукт из избранного
//       };
      
//     default:
//       return state;
//   }
// };
const initialState = {
  likedProducts: [],
};

const TOGGLE_LIKED_PRODUCT = 'TOGGLE_LIKED_PRODUCT';

// Экшен для добавления или удаления продукта из избранного
export const toggleLikedProductAction = (product) => ({
  type: TOGGLE_LIKED_PRODUCT,
  payload: product,
});

// Редьюсер для обработки логики добавления или удаления продукта
export const likedProductsReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_LIKED_PRODUCT) {
    const isProductLiked = state.likedProducts.some((el) => el.id === action.payload.id);
    
    return {
      ...state,
      likedProducts: isProductLiked
        ? state.likedProducts.filter((el) => el.id !== action.payload.id) // Удаляем продукт, если он уже есть
        : [...state.likedProducts, action.payload], // Добавляем продукт, если его нет
    };
  }

  return state;
};
