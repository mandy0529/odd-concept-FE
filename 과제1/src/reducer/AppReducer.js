import {GET_DATA, OFF_LOADING, ON_LOADING} from './action';

export const initialState = {
  isLoading: true,
  products: [],
  productsPerPage: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case ON_LOADING:
      return {...state, isLoading: true};

    case OFF_LOADING:
      return {...state, isLoading: false};

    case GET_DATA:
      return {...state, isLoading: false, products: action.payload};

    default:
      return {...state};
  }
};

export default AppReducer;
