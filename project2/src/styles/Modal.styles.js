import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #343a40;
  /* opacity: 0.6; */
  top: 0;
  left: 0;
  text-align: center;
  z-index: 1000;
  input {
    position: relative;
    border: 3px solid grey;
    padding: 0.7rem 7rem;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 10px;
  }
  button {
    position: absolute;
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 15rem;
    padding: 0.5rem 1.5rem;
    border: 3px solid white;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    transition: all 0.3s linear;
    &:hover {
      background: white;
      color: black;
    }
  }
`;
export default Wrapper;
