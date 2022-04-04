import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  form {
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
      margin: 0 2rem;
      font-size: 1.4rem;
      padding: 0.8rem 1.5rem;
      background: var(--main-grey);
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 900px) {
    margin-top: 3rem;
    flex-direction: column;
    form {
      width: 250px;
      min-width: 250px;
      .text {
        font-size: 1rem;
      }
      .submit {
        margin: 1rem;
        font-size: 1.2rem;
        padding: 0.3rem 1rem;
      }
    }
  }
`;
