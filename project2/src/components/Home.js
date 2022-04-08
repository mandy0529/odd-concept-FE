import React from 'react';
import {useGlobalContext} from '../context/AppContext.js';
import {Wrapper} from '../styles/Home.styles.js';
import {LOGO} from '../utils/image.js';
import {Canvas} from './index.js';
import Modal from './Modal.js';

function Home() {
  const {isModal} = useGlobalContext();
  if (isModal) return <Modal />;

  return (
    <Wrapper>
      <img src={LOGO} alt={LOGO} />
      <h1>Artificial Intelligence PXL Position Selecting</h1>
      <Canvas />
    </Wrapper>
  );
}

export default Home;
