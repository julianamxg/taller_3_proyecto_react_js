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
            <i class="fa-solid fa-user"></i>
            <form action="#"/>

                <div class="campo">
                    <label for="">Usuario</label>
                    <input type="text"/>
                </div>

                <div class="campo">
                    <label for="">Contraseña</label>
                    <input type="text"/>
                </div>


                <button class="boton"><a href="../assets/dashboard.html">Ingresar</a></button>

                <p>¿No tienes una cuenta? <a href="../assets/registro.html">Regístrate aquí.</a> </p>
        </div>
    </div>
    </div>
    );
}

export default Contenedor;











