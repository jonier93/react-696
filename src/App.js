import './App.css';
import Navegation from './components/navegation';
import { Register } from './components/register';
import Home from './components/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navegation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/register_page" element={<Register/>} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
