import React, {useEffect} from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Home/Search.styles';
import Msg from '../Alert/Msg';

function Search() {
  const {handleSubmit, handleInput, query, message, handleReset} =
    useGlobalContext();
  const searchValue = React.useRef();

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <Wrapper>
      <div className="message">
        {message.state && <Msg message={message.msg} />}
      </div>

      <div className="search__form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => handleInput(e)}
            value={query}
            className="text"
            type="text"
            placeholder="IMAGE URL or KEYWORD"
            ref={searchValue}
          />
          <input className="submit" type="submit" value="검색" />
        </form>
        <button onClick={handleReset} className="reset">
          리셋
        </button>
      </div>
    </Wrapper>
  );
}

export default Search;
