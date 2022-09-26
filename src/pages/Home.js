import React from 'react';
import Banner from "../components/banner/Banner";
import Descripcion from "../components/descripcion/Descripcion";
import Feature from "../components/feature/Feature";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import Ubicacion from "../components/ubicacion/Ubicacion";
import Calificaciones from "../components/calificaciones/calificaciones";
import '../index.css';

function Home(){
    return(
        <>
        <Nav/>
        <Banner/>
        <Descripcion/>
        <Feature/>
        <Ubicacion/>
        <Calificaciones/>
        <Footer/>
        </>
    );
}
export default Home;