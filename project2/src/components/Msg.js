import React, {useEffect} from 'react';
import {useGlobalContext} from '../context/AppContext';
import {Wrapper} from '../styles/Msg.styles';

function Msg() {
  const {msg, closeMsg} = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      closeMsg();
    }, 2000);
  }, [msg.state]);

  return (
    <Wrapper>
      <p>{msg.message}</p>
    </Wrapper>
  );
}

export default Msg;
