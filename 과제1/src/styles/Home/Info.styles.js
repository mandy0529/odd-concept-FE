import styled from 'styled-components';

export const Wrapper = styled.div`
  p {
    font-size: 2.2rem;
    opacity: 0.8;
    text-align: center;
    margin-top: 3rem;
    line-height: 4rem;
    letter-spacing: 0.1rem;
    strong {
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 1.6rem;
      line-height: 3rem;

      strong {
        font-size: 1.9rem;
      }
    }
  }
`;
