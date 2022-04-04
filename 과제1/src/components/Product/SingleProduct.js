import React from 'react';
import {useParams} from 'react-router-dom';
import {useGlobalContext} from '../../context/AppContext';

function SingleProduct() {
  const {id} = useParams();
  const {filtered_products, page} = useGlobalContext();

  const findItem = filtered_products[page].find((item) =>
    item.image_url.includes(id)
  );

  return (
    <div>
      <img src={findItem.image_url} alt={findItem.name} />
    </div>
  );
}

export default SingleProduct;
