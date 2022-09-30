import { Link } from "react-router-dom";
import logov from "./Hotelia horizontal blanco.svg";
import "./Nav.css";


function Nav(){
    
    return(
        
        <nav>
        <div class="logoN">
                <i class="fa-solid fa-bars icono"></i>
                <img src={logov} alt="Logo Hotelia"/>
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