import React, {useContext, useEffect, useReducer, useState} from 'react';
import AppReducer, {initialState} from '../reducer/AppReducer';
import {API_PRODUCT, API_REGION} from '../utils/api';
import {paginate} from '../utils/helper';
import {
  CATEGORY_PRODUCTS,
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
} from '../reducer/action';

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    dispatch({type: ON_LOADING});
    try {
      const response = await fetch(`${API_PRODUCT}`);
      const data = await response.json();
      const pageData = paginate(data);

      dispatch({type: GET_ALL_DATA, payload: data});
      dispatch({type: PAGE_PER_DATA, payload: pageData});
    } catch (error) {
      console.log(error);
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

  const fetchRegionData = async () => {
    dispatch({type: REGION_ON_LOADING});
    try {
      const response = await fetch(`${API_REGION}`);
      const data = await response.json();
      const pageData = paginate(data);
      dispatch({type: REGION_ALL_DATA, payload: data});
      dispatch({type: REGION_PER_PAGE, payload: pageData});
    } catch (error) {
      console.log(error);
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
      dispatch({type: NO_DATA_ALERT});
    }
  };

  // const categoryProducts = () => {
  //   const filtered_products = state.all_products.map((item) => {
  //     return item.category_names;
  //   });

  //   const tempFilter = paginate(filtered_products);
  //   if (filtered_products.length > 0) {
  //     dispatch({type: CATEGORY_PRODUCTS, payload: tempFilter});
  //   } else {
  //     setQuery('');
  //     dispatch({type: NO_DATA_ALERT});
  //   }
  // };
  // const matchingProduct = () => {
  //   const matching_products = state.filtered_products.filter((item) => {
  //     console.log(item.category_names, '@@@1');
  //     const matching_category = item.category_names.map((item) => {
  //       return item;
  //     });
  //     console.log(matching_category, '@@@2');
  //     if (Array(item.category_names) === Array(matching_category)) {
  //       console.log(item, '@@@@이건뭐');
  //       return item;
  //     }
  //     return null;
  //   });
  //   console.log(matching_products, '@@@@matching products');
  // };

  const controlPage = (e) => {
    const {type} = e.target.dataset;

    setPage((oldPage) => {
      let currentPage;
      if (type === 'next') {
        currentPage = oldPage + 1;
        if (currentPage > state.filtered_products.length - 1) {
          currentPage = 0;
        }
        return currentPage;
      } else {
        currentPage = oldPage - 1;
        if (currentPage < 0) {
          currentPage = state.filtered_products.length - 1;
        }
        return currentPage;
      }
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      if (query.startsWith('http') || query.match(/^\d/)) {
        getRegionFilteredData();
        // categoryProducts();
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

  const closeAlert = () => {
    dispatch({type: CLOSE_ALERT});
  };

  const handleReset = () => {
    setQuery('');
    dispatch({type: HANDLE_RESET});
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchRegionData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleInput,
        handleSubmit,
        page,
        controlPage,
        handlePage,
        query,
        closeAlert,
        handleReset,
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
