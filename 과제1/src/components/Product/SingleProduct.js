import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Product/SingleProduct.styles';
import {formatPrice} from '../../utils/helper';

function SingleProduct() {
  const {id} = useParams();
  const {filtered_products, page} = useGlobalContext();

  const findItem = filtered_products[page].find((item) =>
    item.image_url.includes(id)
  );
  const {image_url, name, price} = findItem;

  console.log(image_url, 'image url');
  return (
    <Wrapper>
      <img src={image_url} alt={name} />
      <div>
        <h3>제품 이름 : {name}</h3>
        <h4>제품 가격 : {formatPrice(price)}</h4>
        <Link to="/">
          <button>더 많은 제품 보기</button>
        </Link>
      </div>
    </Wrapper>
  );
}

export default SingleProduct;
