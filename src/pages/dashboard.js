import React from 'react';
import Menu from "../components/menu/Menu";
import Informacion from "../components/informacion/Informacion";
import Formulario from "../components/formulario/Formulario";

function Dashboard(){
    return(
        <>
        <Menu/>
        <Informacion/>
        <Formulario/>
        </>
    );
}
export default Dashboard;