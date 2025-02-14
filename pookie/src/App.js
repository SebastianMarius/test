import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Accepted from './pages/accepted';
import Alo from './pages/alo';

function App() {
  return (
    <Routes>
      <Route path='/teAdor' element={<Home />} />
      <Route path='/accepted' element={<Accepted />} />
      <Route path='/' element={<Alo/>}/>
    </Routes>
  );
}

export default App;
