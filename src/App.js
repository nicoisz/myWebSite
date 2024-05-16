import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './components/login/Login';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home></Home>}></Route>
        <Route index path='/login' element={<Login></Login>}></Route>
      
  
      
        </Routes>
    </BrowserRouter>
  );
}

export default App;
