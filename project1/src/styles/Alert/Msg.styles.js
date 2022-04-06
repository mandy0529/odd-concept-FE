import styled from 'styled-components';

export const Wrapper = styled.div`
  div {
    width: 100%;
    padding: 0.5rem 10rem;
    border-radius: 10px;
    background-color: var(--main-red);
    color: white;
  }
  @media screen and (max-width: 900px) {
    div {
      font-size: 0.8rem;
      padding: 0.3rem 5rem;
    }
  }
`;
