import React from 'react';
import {Link} from 'react-router-dom';
import * as H from '../../styles/Header.styles';
import {logo} from '../../utils/image';

function Header() {
  return (
    <H.Wrapper>
      <Link to="/">
        <img src={logo} alt={logo} />
      </Link>
    </H.Wrapper>
  );
}

export default Header;
