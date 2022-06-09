import React from 'react'
import { useGlobalContext } from '../../context/AppContext'
import { Wrapper } from '../../styles/Product/Products.styles'
import {
  ProductItem,
  PageButton,
  HomeInfo,
  Loader,
  RegionProduct,
} from '../index'

function Products() {
  const {
    filtered_products,
    handleReset,
    page,
    isLoading,
    region_filtered_data,
  } = useGlobalContext()

  const currentPage = filtered_products[page]

  if (isLoading) return <Loader />
  if (region_filtered_data.length > 0) return <RegionProduct />
  if (currentPage === undefined) return <HomeInfo />

  return (
    <Wrapper>
      <button onClick={handleReset} className="reset">
        리셋
      </button>

      <div className="product__item">
        {!isLoading &&
          currentPage &&
          currentPage.map((item, index) => {
            return <ProductItem key={index} singleItem={item} />
          })}
      </div>
      <div className="page__btn">
        {currentPage.length > 0 && <PageButton />}
      </div>
    </Wrapper>
  )
}

export default Products
