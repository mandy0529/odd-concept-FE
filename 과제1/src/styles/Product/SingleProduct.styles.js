import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    background-color: var(--main-green);
    font-size: 1.3rem;
    margin: 3rem 0;
    text-align: center;
    transition: all 0.3s linear;
    &:hover {
      cursor: pointer;
      transform: scale(0.96);
      color: white;
    }
  }
  img {
    border-radius: 10px;
    margin: 0 5rem;
  }
`;
