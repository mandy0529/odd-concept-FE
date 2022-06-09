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
  .reset {
    margin: 0 1rem;
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
  @media screen and (max-width: 900px) {
    .product__item {
      justify-content: center;
    }
    .reset {
      width: 70px;
      font-size: 1rem;
      padding: 0.5rem 0;
    }
  }
`;
