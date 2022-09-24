import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav/Nav';
import Banner from './components/banner/Banner';
import Descripcion from './components/descripcion/Descripcion';
import Feature from './components/feature/Feature';
import './index.css';
import Ubicacion from './components/ubicacion/Ubicacion';
import Footer from './components/footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Banner/>
    <Descripcion/>
    <Feature/>
    <Ubicacion/>
    <Footer/>
   
  </React.StrictMode>
);


