const initialState = {
  discountedProducts: [],
  loading: false,
  error: null,
};

// Экшен для начала запроса товаров
export const fetchDiscountedProductsRequest = () => ({
    type: 'FETCH_DISCOUNTED_PRODUCTS_REQUEST',
  });
  
  // Экшен для успешной загрузки товаров
  export const fetchDiscountedProductsSuccess = (products) => ({
    type: 'FETCH_DISCOUNTED_PRODUCTS_SUCCESS',
    payload: products,
  });
  
  // Экшен для обработки ошибок
  export const fetchDiscountedProductsFailure = (error) => ({
    type: 'FETCH_DISCOUNTED_PRODUCTS_FAILURE',
    payload: error,
  });

const discountedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DISCOUNTED_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DISCOUNTED_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default discountedReducer;
