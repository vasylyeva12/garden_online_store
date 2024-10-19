const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

// Экшены для управления корзиной

const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
const INCREASE_CART = "INCREASE_CART";
const DECREASE_CART = "DECREASE_CART";
const CLEAR_CART = "CLEAR_CART";
const GET_TOTALS = "GET_TOTALS";

// Добавление товара в корзину
export const addProductToCartAction = (product) => (dispatch, getState) => {
  const state = getState();
  const existingProductIndex = state.cart.cartItems.findIndex(
    (item) => item.id === product.id
  );
  let updateCartItems = [...state.cart.cartItems];
  if (existingProductIndex === -1) {
    //добавляем новый товар, если его еще нет в корзине
    updateCartItems.push({ ...product, cartQuantity: 1 });
  }
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: updateCartItems,
  });
};

//Удаление товара из корзины
export const deleteProductFromCartAction = (product_id) => (dispatch, getState) => {
    const state = getState();
    const updateCartItems = state.cart.cartItems.filter(
      (item) => item.id !== product_id
    );

    dispatch({
      type: DELETE_PRODUCT_FROM_CART,
      payload: updateCartItems,
    });
  };

// Увеличение количества товара
export const inscreaseCartAction = (id) => (dispatch, getState) => {
  const state = getState();
  const updateCartItems = state.cart.cartItems.map((item) =>
    item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
  );

  dispatch({
    type: INCREASE_CART,
    payload: updateCartItems,
  });
};

// Уменьшение количества товара

export const decreaseCartAction = (id) => (dispatch, getState) => {
  const state = getState();
  const updateCartItems = state.cart.cartItems.map((item) =>
    item.id === id && item.cartQuantity > 1
      ? { ...item, cartQuantity: item.cartQuantity - 1 }
      : item
  );
  dispatch({
    type: DECREASE_CART,
    payload: updateCartItems,
  });
};

// Очистка корзины
export const clearCartAction = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  });
};

// Получение общей стоимости и количества товаров в корзине

export const getTotalsAction = () => (dispatch, getState) => {
  const state = getState();
  const totalAmount = state.cart.cartItems.reduce((total, item) => {
    const price = item.discont_price ? item.discont_price : item.price;
    return total + price * item.cartQuantity;
  }, 0);

  const totalQuantity = state.cart.cartItems.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  dispatch({
    type: GET_TOTALS,
    payload: {
      cartTotalAmount: Number(totalAmount.toFixed(2)),
      cartTotalQuantity: totalQuantity,
    },
  });
};

//Редьюсеры для корзины

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
        cartTotalQuantity: state.cartTotalQuantity + 1,
      };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
        cartTotalQuantity: state.cartTotalQuantity - 1,
      };

    case INCREASE_CART:
      return {
        ...state,
        cartItems: action.payload,
        cartTotalQuantity: state.cartTotalQuantity + 1,
      };

      case DECREASE_CART:
        return {
            ...state,
            cartItems: action.payload,
            cartTotalQuantity: state.cartTotalQuantity - 1,
        }
        case CLEAR_CART:
            return {
                ...state,
                cartItems: [],
                cartTotalQuantity: 0,
                cartTotalAmount: 0,
            }
            case GET_TOTALS:
                return {
                    ...state,
                    cartTotalQuantity: action.payload.cartTotalQuantity,
                    cartTotalAmount: action.payload.cartTotalAmount,
                }
                default:
                    return state
  }
};
