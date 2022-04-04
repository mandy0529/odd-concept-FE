import React from 'react';
import {Wrapper} from '../../styles/Product/ProductItem.styles';
import {formatPrice} from '../../utils/helper';

function ProductItem({image_url, name, price, product_code}) {
  return (
    <Wrapper>
      <a href={image_url} target="_blank" rel="noreferrer">
        <div className="product__item">
          <img src={image_url} alt={name} />
          <div className="product__info">
            <p>{name}</p>
            <p className="price">{formatPrice(price)}</p>
          </div>
        </div>
      </a>
    </Wrapper>
  );
}

export default ProductItem;
