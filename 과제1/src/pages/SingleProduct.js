import React from 'react';
import {Link, useParams} from 'react-router-dom';

import {useGlobalContext} from '../context/AppContext';
import {Wrapper} from '../styles/Product/SingleProduct.styles';
import {formatPrice} from '../utils/helper';
import Home from './Home';

function SingleProduct() {
  const {id} = useParams();
  const {filtered_products, page, matchedProducts} = useGlobalContext();

  if (filtered_products.length < 0 || !matchedProducts) {
    return <Home />;
  }

  const findItem =
    filtered_products.length > 0 &&
    filtered_products[page].find((item) => item.image_url.includes(id));

  const {image_url, name, price} = findItem;
  const {image_url: image, name: title, price: won} = matchedProducts;

  return (
    <Wrapper>
      <img src={findItem ? image_url : image} alt={findItem ? name : title} />
      <div>
        <h3>제품 이름 : {findItem ? name : title}</h3>
        <h4>제품 가격 : {formatPrice(findItem ? price : won)}</h4>
        <Link to="/">
          <button>더 많은 제품 보기</button>
        </Link>
      </div>
    </Wrapper>
  );
}

export default SingleProduct;
