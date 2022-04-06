import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 2rem;
  img {
    width: 150px;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(0.98);
      cursor: pointer;
    }
  }
  @media screen and (max-width: 900px) {
    margin: 1.5rem;
    img {
      width: 80px;
    }
  }
`;
