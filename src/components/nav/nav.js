import { Link } from "react-router-dom";
import logov from "./Hotelia horizontal blanco.svg";
import "./Nav.css";
import PropsNav from "./PropsNav";


function Nav(){
    
    return(
        <nav>
        <div class="logoN">
            <PropsNav
                iconoNav="fa-solid fa-bars icono"
                imagenNav={logov}/>
        </div>
        <div class="menu">
                <Link to="/" class="item">Inicio</Link>
                <Link to="/" class="item">Ubícanos</Link>
                <Link to="/" class="item">Opiniones</Link>
                <hr class="menu-hr" noshade=""></hr>
                <Link to="/login" class="item2"><i class="fa-solid fa-user inicio"></i> Iniciar Sesión</Link>
        </div>
        
       
    </nav>
    );
    
    }



export default Nav;