import styled from 'styled-components';

export const Wrapper = styled.div`
  img {
    width: 600px;
    border-radius: 10px;
  }
  h4 {
    margin: 2rem 0;
  }
  span {
    padding: 0.5rem 1.5rem;
    background-color: var(--main-green);
    border-radius: 10px;
    font-size: 1.1rem;
    color: white;
  }
  ul {
    margin: 3rem 0;

    .attributes__list {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    li {
      margin: 1rem 0;
      strong {
        color: var(--main-green);
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
  @media screen and (max-width: 900px) {
    img {
      width: 200px;
    }

    span {
      font-size: 0.8rem;
    }
    ul {
      border-bottom: 1px dotted black;
      margin-bottom: 3rem;

      li {
        margin: 1rem 0;
        strong {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
