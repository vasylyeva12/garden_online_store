const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';

export const addProductToCartAction = product => ({ type: ADD_PRODUCT_TO_CART, payload: product });
export const deleteProductFromCartAction = product_id => ({ type: DELETE_PRODUCT_FROM_CART, payload: product_id });

const checkProduct = (state, payload) => {
    const product = state.find(el => el.id === payload.id);

    if(product){
        product.count++;
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}

// если продукт в корзине найден, то в product будет {} (true)
// если продукт в корзине не найден, то в product будет undefined (false)

export const cartReducer = (state=[], action) => {
    if (action.type === ADD_PRODUCT_TO_CART){
        return checkProduct(state, action.payload)
    } else if (action.type === DELETE_PRODUCT_FROM_CART){
        return state.filter(el => el.id !== action.payload)
    }
    return state
}