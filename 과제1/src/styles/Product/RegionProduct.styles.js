import styled from 'styled-components';

export const Wrapper = styled.div`
  .reset {
    margin: 2rem 7rem;
    font-size: 1.4rem;
    padding: 0.8rem 1.5rem;
    background: var(--main-blue);
    border-radius: 10px;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(0.96);
      cursor: pointer;
      color: white;
    }
  }
  .region_products {
    display: flex;
    margin: 2rem;
    .region_products-item {
      margin: 0 3rem 0 3rem;
    }
    .region_products-product {
      display: flex;
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 900px) {
    .reset {
      margin: 1.2rem 3rem;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
    }
    .region_products {
      flex-direction: column;
    }
  }
`;
