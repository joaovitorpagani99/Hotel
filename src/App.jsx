import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import NavBar from './components/Navbar/Navbar';
import Contato from './pages/Contato';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar titulo="Pagani Hotelaria" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
