import styled from 'styled-components';

export const Wrapper = styled.div`
  .product__item {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  .page__btn {
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 900px) {
    .product__item {
      justify-content: center;
    }
  }
`;
