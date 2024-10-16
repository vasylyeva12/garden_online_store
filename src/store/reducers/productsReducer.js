const defaultState = [];

const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
const LOAD_SORT_PRODUCTS = 'LOAD_SORT_PRODUCTS';
const CHECK_PRICE = 'CHECK_PRICE';
const GET_CHECK_PRODUCTS = 'GET_CHECK_PRODUCTS'

export const loadAllProductsAction = (products) => ({ type: LOAD_ALL_PRODUCTS,  payload: products,});
export const loadSortProductsAction = (value) => ({ type: LOAD_SORT_PRODUCTS,  payload: value,});
export const checkPriceAction = (values) => ({ type: CHECK_PRICE,  payload: values,});
export const getCheckProductsAction = (value) => ({ type: GET_CHECK_PRODUCTS,  payload: value,});



export const productsReducer = (state = defaultState, action) => {
    if(action.type === LOAD_ALL_PRODUCTS) {
        return action.payload.map(el => ({...el, visible:true}))
    }
    else if (action.type === LOAD_SORT_PRODUCTS) {
        if (action.payload === 'name') {
            state.sort((a, b) => a.title.localCompare(b.title))
        }else if (action.payload === 'price_asc') {
            state.sort((a, b) => a.price - b.price) 
        } else if (action.payload === 'price_desc') {
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]
    }else if (action.type === GET_CHECK_PRODUCTS) {
        if (action.payload) {
            return state.map(el => {
                if(el.discont_price !== null) {
                    el.visible = true
                 } else if(el.discont_price === null) {
                    el.visible = false
                 }
                 return el 
            })
        }else{
            return state.map(el => {
                el.visible = true
                return el
            })
        }
    } else if (action.type === CHECK_PRICE) {
        const {min_value, max_value} = action.payload
        state.forEach(el => {
            if((el.discont_price === null ? el.price : el.discont_price) >= min_value && 
               (el.discont_price === null ? el.price : el.discont_price) <= max_value) {
               el.visible = true;
            } else {
               el.visible = false;
            }
         });
         return [...state]
    }
    return state

};

