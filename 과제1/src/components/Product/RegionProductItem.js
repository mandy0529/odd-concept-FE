import React from 'react';

function RegionProductItem({image_url, product_code, attributes, gender}) {
  return (
    <div>
      <h3>제품코드 : {product_code}</h3>
      <img src={image_url} alt={product_code} />
      <p> gender : {gender.slice(7)}</p>
      <ul>
        <h3>attributes</h3>
        <li>
          style <strong>#{attributes[0].style}</strong>
        </li>
        <li>
          season <strong>#{attributes[1].season}</strong>
        </li>
        <li>
          occasion <strong>#{attributes[2].occasion}</strong>
        </li>
        <li>
          fabric <strong>#{attributes[3].fabric}</strong>
        </li>
        <li>
          sense <strong>#{attributes[4].sense}</strong>
        </li>
        <li>
          pattern <strong>#{attributes[5].pattern}</strong>
        </li>
      </ul>
    </div>
  );
}

export default RegionProductItem;
