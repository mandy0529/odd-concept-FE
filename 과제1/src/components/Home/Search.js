import React, {useEffect} from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Home/Search.styles';

function Search() {
  const {handleSubmit, handleInput, query} = useGlobalContext();
  const searchValue = React.useRef();

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Search;
