import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper} from '../../styles/Header/Header.styles';
import {logo} from '../../utils/image';

function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt={logo} />
      </Link>
    </Wrapper>
  );
}

export default Header;
