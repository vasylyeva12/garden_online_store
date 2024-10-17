const initialState = {
    data: [],
    isLoading: false
  };

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

export const categoriesReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES:
          return {
            ...state,
            data: action.payload,
          };
        case SET_CATEGORIES_LOADING:
          return {
            ...state,
            isLoading: action.payload,
          };
        default:
          return state;
      }
}