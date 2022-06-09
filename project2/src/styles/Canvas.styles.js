import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ul {
    padding: 0;
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 10px;
    color: black;
    margin: 0.5rem 10rem;
  }
  button {
    background-color: transparent;
    font-size: 1.3rem;
    padding: 0 0.4rem;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`
