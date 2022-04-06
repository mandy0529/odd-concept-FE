import React, {useEffect, useState} from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Product/RegionProduct.styles';
import {paginate} from '../../utils/helper';
import Loader from '../Loader';
import PageButton from './PageButton';
import ProductItem from './ProductItem';
import RegionProductItem from './RegionProductItem';

function RegionProduct() {
  const [matchProduct, setMatchProduct] = useState([]);

  const {
    all_products,
    region_filtered_data,
    region_is_loading,
    page,
    handleReset,
    query,
  } = useGlobalContext();

  const matchingProducts = () => {
    const minji = all_products.map((item) => item);
    const gan = region_filtered_data.find((item) => item);

    const tempProduct = minji.filter((item) => {
      if (
        item.category_names[0] === gan.category_names[0] &&
        item.category_names[1] === gan.category_names[1] &&
        item.category_names[2] === gan.category_names[2]
      ) {
        return item;
      }
      return null;
    });
    const tempFilter = paginate(tempProduct);
    setMatchProduct(tempFilter);
  };

  const currentPage = matchProduct.length > 0 && matchProduct[page];

  const removedItem = () => {
    setMatchProduct([]);
    handleReset();
  };

  useEffect(() => {
    matchingProducts();
  }, [query]);

  if (region_is_loading) return <Loader />;

  return (
    <Wrapper>
      <button onClick={removedItem} className="reset">
        리셋
      </button>

      <div className="region_products">
        <div className="region_products-item">
          {region_filtered_data.map((item) => {
            const {product_code} = item;
            return <RegionProductItem key={product_code} {...item} />;
          })}
        </div>

        <div className="region_products-product">
          {currentPage &&
            currentPage.map((item, index) => {
              return <ProductItem key={index} singleItem={item} />;
            })}
        </div>
      </div>
      <div className="page__btn">
        <PageButton matchProduct={matchProduct} />
      </div>
    </Wrapper>
  );
}

export default RegionProduct;
