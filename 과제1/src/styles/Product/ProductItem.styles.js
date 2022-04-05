import styled from 'styled-components';

export const Wrapper = styled.div`
  .product__item {
    margin: 0.5rem;
    transition: all 0.3s linear;
    display: flex;
    flex-direction: column;

    .product__info {
      margin-top: 0.5rem;
    }
    &:hover {
      cursor: pointer;
      transform: scale(0.97);
    }
    p {
      margin: 0;
    }
    img {
      width: 200px;
      height: 300px;
      border-radius: 15px;
    }
    .price {
      color: grey;
    }
  }
  @media screen and (max-width: 900px) {
    .product__item {
      img {
        width: 300px;
        height: 400px;
      }
    }
  }
`;
