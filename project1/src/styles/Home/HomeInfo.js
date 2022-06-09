import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 5rem;
  opacity: 0.6;
  line-height: 4rem;

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
    h3 {
      font-size: 0.8rem;
    }
  }
`;
