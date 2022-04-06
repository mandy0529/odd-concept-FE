import React, {useEffect} from 'react';
import {useGlobalContext} from '../../context/AppContext';
import {Wrapper} from '../../styles/Home/Search.styles';
import Msg from '../Alert/Msg';

function Search() {
  const {handleSubmit, handleInput, query, message} = useGlobalContext();

  return (
    <Wrapper>
      <div className="message">
        {message.state && <Msg message={message.msg} />}
      </div>

      <div className="search__form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <p>
            키워드 :{' '}
            <strong>
              #원피스 #조끼 #자켓 #바지 #코트 #점퍼 #니트 #스웨터 #블라우스
              #가디건 #셔츠 #신발
            </strong>
          </p>
          <p>
            제품코드 : <strong>1 ~ 2601</strong>
          </p>
          <p>
            Image URL :<strong> http로 시작하는 image url 전체 주소</strong>{' '}
          </p>
          <input
            onChange={(e) => handleInput(e)}
            value={query}
            className="text"
            type="text"
            placeholder="제품코드 or IMAGE URL or KEYWORD"
          />
          <input className="submit" type="submit" value="검색" />
        </form>
      </div>
    </Wrapper>
  );
}

export default Search;
