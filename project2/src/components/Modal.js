import React, {useEffect, useRef} from 'react';
import {useGlobalContext} from '../context/AppContext';
import Wrapper from '../styles/Modal.styles';

function Modal() {
  const {handleChange, handleSubmit, value, closeModal} = useGlobalContext();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleChange(e)}
          placeholder="제품의 이름을 정해주세요"
          type="text"
          value={value}
          ref={inputRef}
        />
      </form>
      <button onClick={closeModal}>정하기</button>
    </Wrapper>
  );
}

export default Modal;
