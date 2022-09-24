import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Registro from './pages/Registro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/registro' element={<Registro />} />
  </Routes>
</BrowserRouter> 
);

/**/


