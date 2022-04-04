import styled from 'styled-components';

export const Wrapper = styled.div`
  .btn {
    padding: 0.35rem 0.75rem;
    letter-spacing: 1.6px;
    font-size: 0.75rem;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    border-color: transparent;
    text-transform: uppercase;
    transition: var(--transition);
    cursor: pointer;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .page-btn {
    width: 2rem;
    height: 2rem;
    background: var(--clr-primary-7);
    border-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    margin: 0.5rem;
    transition: var(--transition);
  }
  .active-btn {
    background: grey;
    color: white;
  }
  .prev-btn,
  .next-btn {
    background: transparent;
    border-color: transparent;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    margin: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }

  @media screen and (min-width: 775px) {
    .btn-container {
      margin: 0 auto;
      max-width: 700px;
    }
  }
`;
