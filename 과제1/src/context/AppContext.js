import React, {useContext, useEffect, useReducer, useState} from 'react';
import {GET_DATA, ON_LOADING} from '../reducer/action';
import AppReducer, {initialState} from '../reducer/AppReducer';
import {API_PRODUCT} from '../utils/api';
import {paginate} from '../utils/helper';

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    dispatch({type: ON_LOADING});
    try {
      const response = await fetch(API_PRODUCT);
      const data = await response.json();
      const pageData = paginate(data);
      dispatch({type: GET_DATA, payload: pageData});
    } catch (error) {
      console.log(error);
    }
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

  const handleSubmit = (e) => {};

  const handleInput = (e) => {};

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleInput,
        handleSubmit,
        page,
        controlPage,
        handlePage,
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
