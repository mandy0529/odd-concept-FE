import {
  ASYNC_DATA_ERROR,
  CLOSE_ALERT,
  FILTERED_DATA,
  GET_ALL_DATA,
  HANDLE_RESET,
  INPUT_MSG,
  NO_DATA_ALERT,
  OFF_LOADING,
  ON_LOADING,
  PAGE_PER_DATA,
  REGION_ALL_DATA,
  REGION_FILTERED_DATA,
  REGION_OFF_LOADING,
  REGION_ON_LOADING,
  REGION_PER_PAGE,
  REMOVE_REGION,
} from './action'

export const initialState = {
  // loading
  isLoading: true,

  // product data
  all_products: [],
  products_per_page: [],
  filtered_products: [],
  message: { state: false, msg: '' },

  // region data
  region_is_loading: true,
  region_all_data: [],
  region_per_page: [],
  region_filtered_data: [],
  category_products: [],
}

const AppReducer = (state, action) => {
  switch (action.type) {
    // products loading
    case ON_LOADING:
      return { ...state, isLoading: true }

    case OFF_LOADING:
      return { ...state, isLoading: false }

    // region loading
    case REGION_ON_LOADING:
      return { ...state, region_is_loading: true }

    case REGION_OFF_LOADING:
      return { ...state, region_is_loading: false }

    // products fetch
    case GET_ALL_DATA:
      return { ...state, all_products: action.payload }

    case PAGE_PER_DATA:
      return { ...state, products_per_page: action.payload }

    case FILTERED_DATA:
      return {
        ...state,
        isLoading: false,
        filtered_products: action.payload,
        region_filtered_data: [],
      }

    // region fetch data
    case REGION_ALL_DATA:
      return {
        ...state,
        region_is_loading: false,
        region_all_data: action.payload,
      }

    case REGION_PER_PAGE:
      return {
        ...state,
        region_is_loading: false,
        region_per_page: action.payload,
      }

    case REGION_FILTERED_DATA:
      return {
        ...state,
        region_is_loading: false,
        region_filtered_data: action.payload,
        filtered_products: [],
      }

    case REMOVE_REGION:
      return {
        ...state,
        region_filtered_data: [],
      }

    // control alert message
    case CLOSE_ALERT:
      return {
        ...state,
        message: {
          ...state.message,
          state: false,
          msg: '',
        },
      }

    case INPUT_MSG:
      return {
        ...state,
        message: {
          ...state.message,
          state: true,
          msg: '검색창에 입력값을 입력해주세요.',
        },
      }

    case NO_DATA_ALERT:
      return {
        ...state,
        message: {
          ...state.message,
          state: true,
          msg:
            '검색한 검색어로는 정보가 없습니다. 조건에 맞는 검색어로 다시 입력해주세요.',
        },
        filtered_products: [],
      }

    case ASYNC_DATA_ERROR:
      return {
        ...state,
        message: {
          ...state.message,
          state: true,
          msg:
            '서버에서 데이터를 불러오지못했습니다. 새로고침하고 다시 접속해주세요.',
        },
      }

    // control input
    case HANDLE_RESET:
      return { ...state, filtered_products: [] }

    default:
      return { ...state }
  }
}

export default AppReducer
