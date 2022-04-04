import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Header, Sidebar} from './components';
import {Home, Product} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
