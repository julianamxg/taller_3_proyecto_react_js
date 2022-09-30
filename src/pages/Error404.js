import React from 'react';
import logoh from "./Hotelia horizontal negro.svg";
import './Errror404.css'

function Error404(){
    return(
        <div className='error'>
            <p>Disculpanos, la pagina que buscas no existe</p>
        <h1>Error 404</h1>
        <img src={logoh} alt="Hotelia horizontal negro"/>
        </div>
       
    );
}
export default Error404;