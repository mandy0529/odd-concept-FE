import React from 'react';
import {Info, Loader, Products, Search} from '../components';
import {useGlobalContext} from '../context/AppContext';

function Home() {
  const {isLoading} = useGlobalContext();
  if (isLoading) return <Loader />;

  return (
    <div>
      <Info />
      <Search />
      <Products />
    </div>
  );
}

export default Home;
