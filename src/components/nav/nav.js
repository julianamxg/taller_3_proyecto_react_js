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
                <a href="index.html" class="item">Inicio</a>
                <a href="ubicacion.html" class="item">Ubícanos</a>
                <a href="opiniones.html" class="item">Opiniones</a>
                <a href="assets/login.html" class="item2"><i class="fa-solid fa-user"></i> Iniciar Sesión</a>
        </div>
    </nav>
    );
}

export default Nav;