import React from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Product/Products.styles';
import Error from '../Error';
import {ProductItem, PageButton} from '../index';
import Loader from '../Loader';
import Minji from '../Minji';

function Products() {
  const {filtered_products, page, isLoading, minji} = useGlobalContext();

  if (isLoading) return <Loader />;

  if (minji.length > 0) return <Minji />;

  const currentPage = filtered_products[page];
  if (currentPage === undefined) return <Error />;

  return (
    <Wrapper>
      {currentPage &&
        currentPage.map((item, index) => {
          return <ProductItem key={index} singleItem={item} />;
        })}
      {currentPage.length > 0 && <PageButton />}
    </Wrapper>
  );
}

export default Products;
