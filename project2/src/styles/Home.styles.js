import styled from 'styled-components';

export const Wrapper = styled.div`
  img {
    width: 130px;
    transition: all 0.3s linear;
    margin: 2rem 5rem;
    &:hover {
      transform: scale(0.96);
      cursor: pointer;
    }
  }
  h1 {
    margin-bottom: 5rem;
  }
`;
