const defaultState = {
    data: [],
    status: 'loading'
}

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';
const CHANGE_STATUS_TO_LOADING = 'CHANGE_STATUS_TO_LOADING';
const SORT_ALL_PRODUCTS = 'SORT_ALL_PRODUCTS';
const GET_DISCOUNTED_PRODUCTS = 'GET_DISCOUNTED_PRODUCTS'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE';

export const loadProductsByCategoryAction = products => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload: products });
export const changeStatusAction = () => ({ type: CHANGE_STATUS_TO_LOADING });
export const sortAllProductsAction = (option_value) => ({ type: SORT_ALL_PRODUCTS,  payload: option_value});
export const getDiscountedProductsAction = (value) => ({ type: GET_DISCOUNTED_PRODUCTS,  payload: value});
export const filterByPriceAction = (values) => ({ type: FILTER_BY_PRICE,  payload: values});


export const productsByCategoryReducer = (state = defaultState, action) => {
    if(action.type === LOAD_PRODUCTS_BY_CATEGORY){
        return {
            data: action.payload.data.map(el => ({...el, visible: true})),
            status: 'ready'
        }
    } else if (action.type === CHANGE_STATUS_TO_LOADING) {
        return {
            ...state,
            status: 'loading'
        }
    } else if (action.type === SORT_ALL_PRODUCTS) {
        if (action.payload === 'title') {
            state.sort((a, b) => a.title.localeCompare(b.title))
        }else if (action.payload === 'price_low') {
            state.sort((a, b) => a.price - b.price) 
        } else if (action.payload === 'price_high') {
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]
    }else if (action.type === GET_DISCOUNTED_PRODUCTS) {
        if (action.payload) {
              state.data.map(el => {
                if(el.discont_price) {
                    el.visible = true
                 } else if(!el.discont_price) {
                    el.visible = false
                 }
                 return el 
            })
        }else{
             state.data.map(el => {
                el.visible = true
                return el
            })
        }
        return {...state}

    } else if (action.type === FILTER_BY_PRICE) {
        const { min, max } = action.payload
        state.data.map(el => {
            el.visible = el.price >= min && el.price <= max ? true : false;
            return el
         });
         return {...state}
    }
    return state
}