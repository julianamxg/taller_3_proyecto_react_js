import { Link } from "react-router-dom";
import "./Encabezado-registro.css";
function Encabezado() {
    return (
        <div className="bodyR">
            <div class="encabezado">
                <div class="container-registro">

                    <h2 class="tituloR">Regístrate</h2>

                    <div class="form">

                        <div class="izquierda">
                            <label>Tipo de documento</label>
                            <input className="input2" type="text" placeholder="Escoja una opción"></input>

                            <label>Nombres</label>
                            <input className="input2" type="text"></input>

                            <label>Fecha de nacimiento</label>
                            <input className="input2" type="text"></input>

                            <label>Email</label>
                            <input className="input2" type="email"></input>

                            <label>País de origen</label>
                            <input className="input2" type="text"></input>

                            <label>Contraseña</label>
                            <input className="input2" type="password"></input>
                        </div>

                        <div class="derecha">
                            <label>Número de documento</label>
                            <input className="input2" type="text"></input>

                            <label>Apellidos</label>
                            <input className="input2" type="text"></input>

                            <label>Genero</label>
                            <div class="generos">
                                <input className="input2" type="radio"></input>
                                <label>Mujer</label>

                                <input className="input2" type="radio"></input>
                                <label>Hombre</label>

                                <input className="input2" type="radio"></input>
                                <label>Otro</label>
                            </div>

                            <label>Telefono de contacto</label>
                            <input className="input2" type="number"></input>

                            <label>Foto</label>
                            <input className="input2" type="password" placeholder="Seleccionar archivo"></input>


                            <label>Confirmar contraseña</label>
                            <input className="input2" type="password" placeholder=""></input>
                        </div>
                        <div class="terminos">
                            <input className="input2" type="checkbox" class="termino"></input>
                            <label>Acepto Terminos y Condiciones</label>

                        </div>
                     


                    </div>
                    <div class="terminos2">
                        <input id="terminosA" className="input2" type="checkbox" class="termino2"></input>
                        <label>Acepto Terminos y Condiciones</label>

                    </div>

                    <div id="modalTerminos" class="modal">
                        <div class="contenidoModal">
                            <h2>Terminos y Condiciones</h2>
                            <p className="p" >Estos Términos del Servicio reflejan la forma de trabajar de Google como empresa, las leyes por las que nos regimos y determinados aspectos que siempre hemos creído que son ciertos. Por ello, estos Términos del Servicio ayudan a definir la relación que tiene Google contigo cuando interactúas con nuestros servicios. Por ejemplo, estos términos incluyen las siguientes secciones: 
                                Qué puedes esperar de nosotros, donde se describe cómo proporcionamos y desarrollamos nuestros servicios. Lo que esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.</p>
                                <button class="cerrarModal boton">Aceptar</button>
                        </div>
                    </div>

                    <button class="boton2"><Link to="/dashboard">Ingresar</Link></button>


                </div>

            </div>
        </div>
    );
}

export default Encabezado;