import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper} from '../../styles/Product/ProductItem.styles';
import {formatPrice} from '../../utils/helper';

function ProductItem({singleItem}) {
  const {image_url, name, price} = singleItem;
  const pathname = new URL(image_url).pathname;
  const splittedPathname = pathname.split('/')[3].slice(0, -4);

  return (
    <Wrapper>
      <Link to={`/${splittedPathname}`}>
        <div className="product__item">
          <img src={image_url} alt={name} />
          <div className="product__info">
            <p>{name}</p>
            <p className="price">{formatPrice(price)}</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

export default ProductItem;
