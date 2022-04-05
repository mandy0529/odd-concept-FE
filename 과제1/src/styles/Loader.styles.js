import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 7rem auto;
  text-align: center;
  img {
    width: 100px;
  }
  .loader {
    border: 10px solid #f3f3f3;
    border-top: 10px solid black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
    margin: 2rem auto;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 500px) {
    margin: 12rem auto;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
