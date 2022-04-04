import React, {useEffect, useState} from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Product/Products.styles';
import {Error, ProductItem, PageButton} from '../index';

function Products() {
  const [pagedProducts, setPagedProducts] = useState([]);

  const {products, page, isLoading} = useGlobalContext();

  useEffect(() => {
    if (isLoading) return;
    setPagedProducts(products[page]);
  }, [isLoading, page]);

  return (
    <Wrapper>
      <div>{pagedProducts.length === 0 && <Error />}</div>
      {pagedProducts &&
        pagedProducts.map((item, index) => {
          return <ProductItem key={index} {...item} />;
        })}
      {!isLoading && <PageButton />}
    </Wrapper>
  );
}

export default Products;
