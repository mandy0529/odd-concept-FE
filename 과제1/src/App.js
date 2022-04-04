import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header, SingleProduct} from './components';
import {Home} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
