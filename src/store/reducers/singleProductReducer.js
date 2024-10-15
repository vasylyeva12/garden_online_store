const initialState = {
    product: null,
    loading: false,
    error: null
}

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';


export const loadSingleProductAction = singleProduct => ({ type: LOAD_SINGLE_PRODUCT, payload: singleProduct });

export const singleProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SINGLE_PRODUCT:
          return {
            ...state,
            product: action.payload[0],
            loading: false,
            error: null,
          };
        default:
    return state
}
}