import logop from "./perfil.jpg";
import "./Formulario.css";
function Formulario() {
    return (
        <div class="informacion">
            <div class="contenido">
                <div class="Bienvenido">
                    <h2>Bienvenido, Angie Vargas</h2>
                </div>
                <div class="inferior">
                    <div class="foto">
                        <img src={logop} alt=""></img>
                        <div class="iconosDash">
                            <i class="fa-solid fa-file-arrow-up icon_1"></i>
                            <i class="fa-solid fa-upload"></i>
                        </div>
                        <div class="contra">
                            <a href="">Cambiar contraseña</a>
                        </div>
                    </div>


                    
                    <div class="formulario">
                        <form action="">
                            <div class="form-cont">
                                <div class="formDash">
                                    <label for="">Tipo de documento</label>
                                    <input type="text" placeholder="Cédula de ciudadanía"></input>
                                </div>
                                <div class="formDash">
                                    <label for="">Número de documento</label>
                                    <input type="text" placeholder="1025417456"></input>
                                </div>
                            </div>

                            <div class="form-cont">
                                <div class="formDash">
                                    <label for="">Nombres</label>
                                    <input type="text" placeholder="Angie Camila"></input>
                                </div>
                                <div class="formDash">
                                    <label for="">Apellidos</label>
                                    <input type="text" placeholder="Vargas Pinzón"></input>
                                </div>
                            </div>

                            <div class="form-cont">
                                <div class="formDash">
                                    <label for="">Fecha nacimiento</label>
                                    <input type="text" placeholder="10/08/197"></input>
                                </div>
                                <div class="formDash">
                                    <label for="">País de origen</label>
                                    <input type="text" placeholder="Colombia"></input>
                                </div>
                            </div>
                            <div class="form-cont">
                                <div class="formDash">
                                    <label for="">Género</label>
                                    <div class="radio">
                                        <label for="">Mujer</label>
                                        <input type="radio"></input>
                                        <label for="">Hombre</label>
                                        <input type="radio"></input>
                                        <label for="">Otro</label>
                                        <input type="radio"></input>
                                    </div>

                                </div>
                                <div class="formDash separador">
                                    <label for="">Teléfono de contacto</label>
                                    <input type="text"></input>
                                </div>
                            </div>

                            <div class="form-cont-2">
                                <div class="formDash">
                                    <label for="">Email</label>
                                    <input type="text"></input>
                                </div>

                            </div>

                            <div class="form-cont-2">
                                <div class="formDash">
                                    <a href="">Actualizar</a>
                                </div>

                            </div>
                            <div class="form-cont">
                                <div class="formDash">
                                    <label for="">Contraseña</label>
                                    <input type="text"></input>
                                </div>
                                <div class="formDash">
                                    <label for="">Confirmar contraseña</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div class="form-cont-2">
                                <div class="formDash">
                                    <a href="">Cambiar</a>
                                </div>

                            </div>
                        </form>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Formulario;