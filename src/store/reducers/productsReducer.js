const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";

export const loadAllProductsAction = (products) => ({
  type: LOAD_ALL_PRODUCTS,
  payload: products,
});


export const productsReducer = (state = [], action) => {
    if(action.type === LOAD_ALL_PRODUCTS) {
        return action.payload
    }
    return state

};

// export const getRandomDiscountProducts = (state) => {
//     const discountedProducts = state.products.products.filter(
//         (product) => product.discont_price !== null
//     )

//     const randomDiscountedProducts = [];
//     while (randomDiscountedProducts.length < 4 && discountedProducts.length > 0) {
//         const randomIndex = Math.floor(Math.random() * discountedProducts.length);
//         const randomProduct = discountedProducts[randomIndex]

//         if (!randomDiscountedProducts.includes(randomProduct)) {
//             randomDiscountedProducts.push(randomProduct)
            
//         }
//     }
//     return randomDiscountedProducts;
// }
