import styled from 'styled-components';

export const Wrapper = styled.div`
  .message {
    display: flex;
    justify-content: center;
    font-size: 1.3rem;
  }
  .search__form {
    display: flex;
    justify-content: center;
    margin: 2rem;
  }
  form {
    .search__info {
      background: whitesmoke;
      border-radius: 10px;
      padding: 1rem 1.5rem;
      min-width: 300px;
      margin: 1rem 0;
    }
    p {
      margin: 0.3rem 0;
    }
    .text {
      box-shadow: 1px 2px 14px -7px rgba(10, 10, 10, 0.75);
      -webkit-box-shadow: 1px 2px 14px -7px rgba(10, 10, 10, 0.75);
      -moz-box-shadow: 1px 2px 14px -7px rgba(10, 10, 10, 0.75);
      padding: 0.5rem 1.5rem;
      font-size: 1.2rem;
      width: 500px;

      border-radius: 10px;
    }
    .submit {
      margin: 1rem;
      font-size: 1.4rem;
      padding: 0.8rem 1.5rem;
      background: var(--main-green);
      border-radius: 10px;
      transition: all 0.3s linear;
      &:hover {
        transform: scale(0.96);
        cursor: pointer;
        color: white;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .search__form {
      margin-top: 1rem;
      flex-direction: column;
    }
    form {
      width: 250px;
      min-width: 250px;
      .search__info {
        margin: 0;
      }
      p {
        font-size: 0.7rem;
      }
      .text {
        margin: 2rem 0 0 0;
        font-size: 0.7rem;
        max-width: 300px;
      }
      .submit {
        display: none;
      }
    }
  }
`;
