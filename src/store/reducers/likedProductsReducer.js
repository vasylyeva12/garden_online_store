const initialState = {
  likedProducts: [],
  likeTotalQuantity: 0,
};
const ADD_LIKED_PRODUCT = "ADD_LIKED_PRODUCT";
const DELETE_FROM_LIKED_PRODUCT = "DELETE_FROM_LIKED_PRODUCT";

export const addLikedProductAction = (product) => (dispatch, getState) => {
  const state = getState();
  const existingIndex = state.likedProducts.likedProducts.findIndex(
    (item) => item.id === product.id
  );
  let updateLikedProducts = [...state.likedProducts.likedProducts];
  if (existingIndex === -1) {
    //добавляем товар, если его еще нет в понравившихся
    updateLikedProducts.push(product);
  }
  dispatch({
    type: ADD_LIKED_PRODUCT,
    payload: updateLikedProducts,
  });
}

  //удаление товара из списка избранных

  export const deleteLikedProductAction = (product_id) => (dispatch, getState) => {
      const state = getState();
      const updateLikedProducts = state.likedProducts.likedProducts.filter(
        (item) => item.id !== product_id
      );

      dispatch({
        type: DELETE_FROM_LIKED_PRODUCT,
        payload: updateLikedProducts,
      });
    };

  export const likedProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_LIKED_PRODUCT:
        return {
          ...state,
          likedProducts: action.payload,
          likeTotalQuantity: state.likeTotalQuantity + 1,
        };
      case DELETE_FROM_LIKED_PRODUCT:
        return {
          ...state,
          likedProducts: action.payload,
          likeTotalQuantity: state.likeTotalQuantity - 1,
        };
      default:
        return state;
    }
  };

