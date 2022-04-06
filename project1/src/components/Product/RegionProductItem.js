import React from 'react';
import {Wrapper} from '../../styles/Product/RegionProductItem.styles';

function RegionProductItem({image_url, product_code, attributes, gender}) {
  return (
    <Wrapper>
      <img src={image_url} alt={product_code} />
      <h3> 제품코드 : {product_code}</h3>
      <span>{gender.slice(7)}</span>
      <ul>
        <h3> attributes</h3>
        <div className="attributes__list">
          <li>
            style <br />
            <strong>#{attributes[0].style}</strong>
          </li>
          <li>
            season <br /> <strong>#{attributes[1].season}</strong>
          </li>
          <li>
            occasion <br /> <strong>#{attributes[2].occasion}</strong>
          </li>
          <li>
            fabric <br /> <strong>#{attributes[3].fabric}</strong>
          </li>
          <li>
            sense <br /> <strong>#{attributes[4].sense}</strong>
          </li>
          <li>
            pattern <br /> <strong>#{attributes[5].pattern}</strong>
          </li>
        </div>
      </ul>
    </Wrapper>
  );
}

export default RegionProductItem;
