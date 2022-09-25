import React from 'react';
import Banner from "../components/banner/Banner";
import Descripcion from "../components/descripcion/Descripcion";
import Feature from "../components/feature/Feature";
import Nav from "../components/nav/Nav";
import Calificaciones from "../components/calificaciones/Calificaciones";
import '../index.css';

function Home(){
    return(
        <>
        <Nav/>
        <Banner/>
        <Descripcion/>
        <Feature/>
        <Calificaciones/>
        </>
    );
}
export default Home;