import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 35%;
  background-color: black;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  z-index: 100;

  .input {
    border: 3px solid white;
    color: black;
    padding: 0.7rem 3rem;
    font-size: 1.3rem;
    font-weight: bold;
    background: white;
    border-radius: 10px;
  }

  .btn {
    font-size: 1rem;
    margin: 1rem 0.5rem;
    font-weight: bold;
    color: black;
    padding: 0.7rem 2rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s linear;
    background-color: black;
    color: white;
    border: 3px solid white;
  }
  .submit {
    &:hover {
      background: white;
      color: black;
    }
  }
  .cancel {
    background: tomato;
    color: white;
    &:hover {
      background: white;
      color: tomato;
    }
  }
`;
export default Wrapper;
