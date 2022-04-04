import React from 'react';
import {Wrapper} from '../styles/Loader.styles';
import {logo} from '../utils/image';

function Loader() {
  return (
    <Wrapper>
      <img src={logo} alt={logo} />
      <div className="loader"></div>
    </Wrapper>
  );
}

export default Loader;
