const initialState = {
    product: null,
    loading: false,
    error: null
}

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
const CHANGE_SINGLE_PRODUCT_STATUS = 'CHANGE_SINGLE_PRODUCT_STATUS';

export const loadSingleProductAction = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product });
export const changeSingleProductStatusAction = () => ({ type: CHANGE_SINGLE_PRODUCT_STATUS });

export const singleProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_SINGLE_PRODUCT':
          return {
            ...state,
            product: action.payload,
            loading: false,
            error: null,
          };
        default:
    return state
}
}