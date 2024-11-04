// Action Types
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DELETE_ALL = 'DELETE_ALL';

// Actions
export const addProductToCartAction = product => ({ type: ADD_PRODUCT_TO_CART, payload: product });
export const deleteProductFromCartAction = product_id => ({ type: DELETE_PRODUCT_FROM_CART, payload: product_id });
export const decrementCountAction = product_id => ({ type: DECREMENT_COUNT, payload: product_id });
export const incrementCountAction = product_id => ({ type: INCREMENT_COUNT, payload: product_id });
export const deleteAllAction = () => ({ type: DELETE_ALL });

// Загрузка состояния корзины из localStorage при инициализации
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

// Функция для сохранения состояния корзины в localStorage
const saveToLocalStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
};

// Проверяет, есть ли продукт в корзине или нет
const checkProduct = (state, payload) => {
    const target = state.find(el => el.id === payload.id);
    if (target) {
        target.count++;
        return [...state];
    } else {
        return [...state, { ...payload, count: 1 }];
    }
};

// Cart Reducer
export const cartReducer = (state = initialState, action) => {
    let updatedState;

    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            updatedState = checkProduct(state, action.payload);
            break;
        
        case DELETE_PRODUCT_FROM_CART:
            updatedState = state.filter(el => el.id !== action.payload);
            break;
        
        case INCREMENT_COUNT: {
            updatedState = state.map(el =>
                el.id === action.payload ? { ...el, count: el.count + 1 } : el
            );
            break;
        }
        
        case DECREMENT_COUNT: {
            updatedState = state.map(el =>
                el.id === action.payload ? { ...el, count: el.count - 1 } : el
            ).filter(el => el.count > 0);
            break;
        }
        
        case DELETE_ALL:
            updatedState = [];
            break;
        
        default:
            return state;
    }

    // Сохраняем обновленное состояние корзины в localStorage
    saveToLocalStorage(updatedState);
    return updatedState;
};



