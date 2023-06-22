import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contents from './pages/Contents';
import Shopping from './pages/Shopping';
import Shop from './pages/Shop';
import Enoclock from './pages/Enoclock';
import Sosofun from './pages/Sosofun';
import NoPage from './pages/NoPage';

import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contents' element={<Contents />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/enoclock' element={<Enoclock />} />
          <Route path='/sosofun' element={<Sosofun />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
