import React from 'react'
import { useGlobalContext } from '../../context/AppContext'
import { Wrapper } from '../../styles/Product/PageButton.styles'

function PageButton({ matchProduct }) {
  const { filtered_products, page, handlePage } = useGlobalContext()

  return (
    <Wrapper className="btn-container">
      <p>page</p>

      {filtered_products &&
        filtered_products.map((_, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? 'active-btn' : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          )
        })}

      {matchProduct &&
        matchProduct.map((_, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? 'active-btn' : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          )
        })}
    </Wrapper>
  )
}

export default PageButton
