import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header} from './components';
import {Home, SingleProduct} from './pages';

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
