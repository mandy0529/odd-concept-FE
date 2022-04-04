import React from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Home/Search.styles';

function Search() {
  const {handleSubmit, handleInput} = useGlobalContext();
  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="text"
          type="input"
          placeholder="IMAGE URL or KEYWORD"
        />
        <input
          onChange={(e) => handleInput(e)}
          className="submit"
          type="submit"
          value="검색"
        />
      </form>
    </Wrapper>
  );
}

export default Search;
