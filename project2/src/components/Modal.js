import React, {useEffect, useRef} from 'react';
import {useGlobalContext} from '../context/AppContext';
import Wrapper from '../styles/Modal.styles';
import Msg from './Msg';

function Modal() {
  const {handleChange, handleSubmit, value, closeModal, msg} =
    useGlobalContext();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        {msg.state && <Msg />}
        <input
          className="input"
          onChange={(e) => handleChange(e)}
          placeholder="제품의 이름을 정해주세요"
          type="text"
          value={value}
          ref={inputRef}
        />
        <input className="btn submit" type="submit" value="정하기" />
      </form>
      <button className=" btn cancel" onClick={closeModal}>
        취소하기
      </button>
    </Wrapper>
  );
}

export default Modal;
