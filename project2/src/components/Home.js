import React from 'react';
import {Canvas} from './index.js';

function Home() {
  return (
    <div>
      <h2>이미지 영역 선택해서 이름 설정</h2>
      <div className="App">
        <div className="right-panel">
          <Canvas />
        </div>
      </div>
    </div>
  );
}

export default Home;
