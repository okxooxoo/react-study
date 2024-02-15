import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import StarList from './screens/StarList';
import Reserve from './screens/Reserve';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/starList' element={<StarList />} />
          <Route path='/reserve/:id' element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
