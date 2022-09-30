import { Link } from "react-router-dom";
import logov from "./Hotelia horizontal negro.svg";
import "./Contenedor.css";
function Contenedor(){
    return(
        <div class="body">
        <div class="contenedor">
        <div id="logo">
            <img src={logov} alt="Hotelia horizontal negro"/>
        </div>
        <div class="caja">
            <i class="fa-solid fa-user login"></i>
            <form action="#"/>

                <div class="campo">
                    <label className="label" for="">Usuario</label>
                    <input className="input" type="text"/>
                </div>

                <div class="campo">
                    <label className="label" for="">Contraseña</label>
                    <input className="input" type="text"/>
                </div>


                <button class="boton3"><Link to="/dashboard">Ingresar</Link></button>

                <p class="cuenta" >¿No tienes una cuenta? <Link to="/registro" >Regístrate aquí.</Link> </p>
        </div>
    </div>
    </div>
    );
}

export default Contenedor;










