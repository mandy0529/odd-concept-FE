import React from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Product/Products.styles';
import {ProductItem, PageButton, HomeInfo, Loader} from '../index';
import Minji from './RegionProduct';

function Products() {
  const {filtered_products, page, isLoading, region_filtered_data} =
    useGlobalContext();

  if (isLoading) return <Loader />;

  if (region_filtered_data.length > 0) return <Minji />;

  const currentPage = filtered_products[page];
  if (currentPage === undefined) return <HomeInfo />;

  return (
    <Wrapper>
      <div className="product__item">
        {currentPage &&
          currentPage.map((item, index) => {
            return <ProductItem key={index} singleItem={item} />;
          })}
      </div>
      <div className="page__btn">
        {currentPage.length > 0 && <PageButton />}
      </div>
    </Wrapper>
  );
}

export default Products;
