import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import StarList from './screens/StarList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/starList' element={<StarList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
