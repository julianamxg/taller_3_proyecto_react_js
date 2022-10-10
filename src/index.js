import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Users from './pages/Users.js';
import Modal from './pages/Modal.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/registro' element={<Registro />} />
    <Route path='/login' element={<Login />} />
    <Route path='/Dashboard/' element={<Dashboard />} />
    <Route path='/user/' element={<Users/>}></Route>
    <Route path='/listarAc/' element={<Modal/>}></Route>
    <Route path='*' element={<Error404 />} />

  </Routes>
</BrowserRouter> 

);

/**/


