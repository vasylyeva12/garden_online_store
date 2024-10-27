// Изначальное состояние
const initialState = {
  likedProducts: JSON.parse(localStorage.getItem("likedProducts")) || [], // Загружаем данные из localStorage при инициализации
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

    const updatedLikedProducts = isProductLiked
      ? state.likedProducts.filter((el) => el.id !== action.payload.id) // Удаляем продукт, если он уже есть
      : [...state.likedProducts, action.payload]; // Добавляем продукт, если его нет

    // Сохраняем обновленное состояние в localStorage
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));

    return {
      ...state,
      likedProducts: updatedLikedProducts,
    };
  }

  return state;
};
