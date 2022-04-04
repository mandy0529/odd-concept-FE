import {
  FILTERED_DATA,
  GET_ALL_DATA,
  OFF_LOADING,
  ON_LOADING,
  PAGE_PER_DATA,
  REGION_DATA,
} from './action';

export const initialState = {
  isLoading: true,
  all_products: [],
  products_per_page: [],
  filtered_products: [],
  minji: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case ON_LOADING:
      return {...state, isLoading: true};

    case OFF_LOADING:
      return {...state, isLoading: false};

    case GET_ALL_DATA:
      return {...state, all_products: action.payload};

    case PAGE_PER_DATA:
      return {...state, products_per_page: action.payload};

    case FILTERED_DATA:
      return {
        ...state,
        isLoading: false,
        filtered_products: action.payload,
        minji: [],
      };

    case REGION_DATA:
      return {...state, minji: [...state.minji, {id: 1, content: 'minji'}]};

    default:
      return {...state};
  }
};

export default AppReducer;
