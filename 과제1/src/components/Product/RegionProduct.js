import React, {useEffect} from 'react';
import {useGlobalContext} from '../../context/AppContext';
import Loader from '../Loader';
import RegionProductItem from './RegionProductItem';

function RegionProduct() {
  const {all_products, region_filtered_data, region_is_loading} =
    useGlobalContext();

  const matchingProducts = () => {
    const minji = all_products.map((item) => item.category_names);
    const gan = region_filtered_data.find((item) => item.category_names);

    const temp = minji.filter((item) => {
      if (
        item[0] === gan.category_names[0] &&
        item[1] === gan.category_names[1] &&
        item[2] === gan.category_names[2]
      ) {
        return item;
      }
      return null;
    });

    console.log(temp, '@@@@@@@@');
  };

  useEffect(() => {
    matchingProducts();
  }, []);

  if (region_is_loading) return <Loader />;

  return (
    <div>
      {region_filtered_data.map((item) => {
        const {product_code} = item;
        return <RegionProductItem key={product_code} {...item} />;
      })}
    </div>
  );
}

export default RegionProduct;
