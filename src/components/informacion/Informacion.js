import logop from "./perfil.jpg";
import "./Informacion.css";
function Informacion() {
    return (
        <div class="informacion">
            <div class="contenido">
                <div class="Bienvenido">
                    <h2>Bienvenido, Angie Vargas</h2>
                </div>
                <div class="inferior">
                    <div class="foto">
                        <img src={logop} alt="perfil" />
                        <div class="iconos">
                            <i class="fa-solid fa-file-arrow-up icon_1"></i>
                            <i class="fa-solid fa-upload"></i>
                        </div>
                        <div class="contra">
                            <a href="">Cambiar contraseña</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Informacion;


















