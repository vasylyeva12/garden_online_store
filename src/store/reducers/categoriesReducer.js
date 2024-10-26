const defaultState = [];
  

    

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
const SET_CATEGORIES_LOADING = 'SET_CATEGORIES_LOADING';


// Экшен для загрузки категорий
export const loadCategoriesAction = categories => ({ 
    type: LOAD_CATEGORIES, 
    payload: categories 
});

// Экшен для установки состояния загрузки
export const setCategoriesLoadingAction = (isLoading) => ({ 
    type: SET_CATEGORIES_LOADING,
    payload: isLoading,
  });

  export const categoriesReducer = (state = defaultState, action) => {
    if(action.type === LOAD_CATEGORIES) {
       return action.payload
    }
    return state
 }