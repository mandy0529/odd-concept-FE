import React, {useContext, useEffect, useReducer, useState} from 'react';
import AppReducer, {initialState} from '../reducer/AppReducer';
import {API_PRODUCT, API_REGION} from '../utils/api';
import {paginate} from '../utils/helper';
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
} from '../reducer/action';

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [matchedProducts, setMatchedProducts] = useState('');

  /*
  =============== 
  products fetch
  ===============
  */
  const fetchData = async () => {
    dispatch({type: ON_LOADING});
    try {
      const response = await fetch(`${API_PRODUCT}`);
      const data = await response.json();
      const pageData = paginate(data);

      dispatch({type: GET_ALL_DATA, payload: data});
      dispatch({type: PAGE_PER_DATA, payload: pageData});
    } catch (error) {
      dispatch({type: ASYNC_DATA_ERROR});
    } finally {
      dispatch({type: OFF_LOADING});
    }
  };

  const getFilteredData = () => {
    const filtered_products = state.all_products.filter((item) => {
      if (item.name.includes(query)) {
        return item;
      }
      return null;
    });
    const tempFilter = paginate(filtered_products);
    if (filtered_products.length > 0) {
      dispatch({type: FILTERED_DATA, payload: tempFilter});
    } else {
      setQuery('');
      dispatch({type: NO_DATA_ALERT});
    }
  };

  /*
  =============== 
  region data fetch
  ===============
  */
  const fetchRegionData = async () => {
    dispatch({type: REGION_ON_LOADING});
    try {
      const response = await fetch(`${API_REGION}`);
      const data = await response.json();
      const pageData = paginate(data);
      dispatch({type: REGION_ALL_DATA, payload: data});
      dispatch({type: REGION_PER_PAGE, payload: pageData});
    } catch (error) {
      dispatch({type: ASYNC_DATA_ERROR});
    }
    dispatch({type: REGION_OFF_LOADING});
  };

  const getRegionFilteredData = () => {
    const filtered_products = state.region_all_data.filter((item) => {
      if (
        Number(item.product_code) === Number(query) ||
        item.image_url === query
      ) {
        return item;
      }
      return null;
    });

    if (filtered_products.length > 0) {
      dispatch({type: REGION_FILTERED_DATA, payload: filtered_products});
    } else {
      setQuery('');
      setMatchedProducts('');
      dispatch({type: NO_DATA_ALERT});
    }
  };

  const controlRegion = (singleItem) => {
    setMatchedProducts(singleItem);
  };

  /*
  =============== 
  control page
  ===============
  */
  const handlePage = (index) => {
    setPage(index);
  };

  /*
  =============== 
  control input
  ===============
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      if (query.startsWith('http') || query.match(/^\d/)) {
        getRegionFilteredData();
      } else {
        getFilteredData();
      }
    } else {
      dispatch({type: INPUT_MSG});
    }
    setPage(0);
    setQuery('');
  };

  const handleInput = (e) => {
    const {value} = e.target;
    setQuery(value);
  };

  /*
  =============== 
  alert message
  ===============
  */
  const closeAlert = () => {
    dispatch({type: CLOSE_ALERT});
  };

  const handleReset = () => {
    setQuery('');
    dispatch({type: REMOVE_REGION});
    dispatch({type: HANDLE_RESET});
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    fetchRegionData();
  }, [page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleInput,
        handleSubmit,
        page,
        handlePage,
        query,
        closeAlert,
        handleReset,
        controlRegion,
        matchedProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
