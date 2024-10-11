const ADD_LIKED_PRODUCT = 'ADD_LIKED_PRODUCT';
const DELETE_FROM_LIKED_PRODUCT = 'DELETE_FROM_LIKED_PRODUCT';


export const addLikedProductAction = product => ({ type: ADD_LIKED_PRODUCT, payload: product });
export const deleteLikedProductAction = product_id => ({ type: DELETE_FROM_LIKED_PRODUCT, payload: product_id });

const checkLikedProduct = (state, payload) => {
    const product = state.find(el => el.id === payload.id) 

if (product) {
    product.count++
    return [...state]    
}else{
    return [...state, {...payload, count:1}]
}
}

// если продукт в избранном найден, то в product будет {} (true)
// если продукт в избранном не найден, то в product будет undefined (false)

export const likedProductsReducer = (state = [], action) => {
   
    if(ADD_LIKED_PRODUCT === action.payload){
      return checkLikedProduct(state, action.payload)
    }else if (action.type === DELETE_FROM_LIKED_PRODUCT){
        return state.filter(el => el.id !==action.payload)
    }
    return state
}