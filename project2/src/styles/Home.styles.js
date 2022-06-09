import styled from 'styled-components';

export const Wrapper = styled.div`
  .home {
    transition: all 0.1s linear;
    .home__info {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      h1 {
        margin: 3rem 0;
      }
    }
  }
  img {
    width: 130px;
    transition: all 0.3s linear;
    margin: 0 5rem;
    &:hover {
      transform: scale(0.96);
      cursor: pointer;
    }
  }
`;
