import React from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Product/PageButton.styles';

function PageButton() {
  const {filtered_products, page, controlPage, handlePage} = useGlobalContext();
  return (
    <Wrapper className="btn-container">
      <button
        data-type="prev"
        onClick={(e) => controlPage(e)}
        className="prev-btn"
      >
        prev
      </button>
      {filtered_products.map((_, index) => {
        return (
          <button
            key={index}
            className={`page-btn ${index === page ? 'active-btn' : null}`}
            onClick={() => handlePage(index)}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        data-type="next"
        onClick={(e) => controlPage(e)}
        className="next-btn"
      >
        next
      </button>
    </Wrapper>
  );
}

export default PageButton;
