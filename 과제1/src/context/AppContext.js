import React, {useContext, useEffect, useReducer, useState} from 'react';
import {
  FILTERED_DATA,
  GET_ALL_DATA,
  OFF_LOADING,
  ON_LOADING,
  PAGE_PER_DATA,
  REGION_DATA,
} from '../reducer/action';
import AppReducer, {initialState} from '../reducer/AppReducer';
import {API_PRODUCT} from '../utils/api';
import {paginate} from '../utils/helper';

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
    console.log(tempFilter, 'tempfilter');
    dispatch({type: FILTERED_DATA, payload: tempFilter});
  };

  const controlPage = (e) => {
    const {type} = e.target.dataset;

    setPage((oldPage) => {
      let currentPage;
      if (type === 'next') {
        currentPage = oldPage + 1;
        if (currentPage > state.products.length - 1) {
          currentPage = 0;
        }
        return currentPage;
      } else {
        currentPage = oldPage - 1;
        if (currentPage < 0) {
          currentPage = state.products.length - 1;
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
    if (query.startsWith('http')) {
      dispatch({type: REGION_DATA});
    } else {
      getFilteredData();
    }
    setPage(0);
  };

  const handleInput = (e) => {
    const {value} = e.target;
    setQuery(value);
  };

  useEffect(() => {
    fetchData();
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
