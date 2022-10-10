import logop from "./perfil.jpg";
import "./Formulario.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
function Formulario() {
    /*1. Definir url del api, generar peticiones asíncronas */
    const url = "https://hoteliakuepa.herokuapp.com/users";

    /*2. Creó función para conectarse a la api y ejecutar petición tipo get */
    const getData = async () => {
        const response = axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado*/
    const [list, setList] = useState([]);

    /*4 usseEfect para ejecutar funciones desde el inicio del renderizado */
    useEffect(() => {
        getData().then((response) => { //promesa
            setList(response.data); //escribir en el useState List
        })
    }, [])


    //console.log(list)
    return (
        <>
            {list.map((us, index) => (
            
            <div class="informacion">
                <div class="contenido">
                    <div class="Bienvenido">
                        <h2>Bienvenido, </h2><h2>{us.nombre}{us.apellido}</h2>
                    </div>
                    <div class="inferior">
                        <div class="foto">
                            <img name="img" value={us.img} alt=""></img>
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
                                        <input value={us.tipodoc} type="text" ></input>
                                    </div>
                                    <div class="formDash">
                                        <label for="">Número de documento</label>
                                        <input value={us._id} type="text" ></input>
                                    </div>
                                </div>

                                <div class="form-cont">
                                    <div class="formDash">
                                        <label for="">Nombres</label>
                                        <input value={us.nombre} type="text" ></input>
                                    </div>
                                    <div class="formDash">
                                        <label for="">Apellidos</label>
                                        <input value={us.apellido} type="text" placeholder="Vargas Pinzón"></input>
                                    </div>
                                </div>

                                <div class="form-cont">
                                    <div class="formDash">
                                        <label for="">Fecha nacimiento</label>
                                        <input type="text" value={us.fnacimiento}></input>
                                    </div>
                                    <div class="formDash">
                                        <label for="">País de origen</label>
                                        <input type="text" value={us.paisorigen}></input>
                                    </div>
                                </div>
                                <div class="form-cont">
                                    <div class="formDash">
                                        <label>Género</label>
                                        <select  name="genero" class="input2">
                                            <option>Seleccione un género</option>
                                            <option value={us.genero}>Mujer</option>
                                            <option value={us.genero}>Hombre</option>
                                            <option value={us.genero}>Otro</option>
                                        </select>

                                    </div>
                                    <div class="formDash separador">
                                        <label for="">Teléfono de contacto</label>
                                        <input value={us.telefono} type="text"></input>
                                    </div>
                                </div>

                                <div class="form-cont-2">
                                    <div class="formDash">
                                        <label for="">Email</label>
                                        <input value={us.email} type="text"></input>
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
                                        <input value={us.password} type="text"></input>
                                    </div>
                                    <div class="formDash">
                                        <label for="">Confirmar contraseña</label>
                                        <input value={us.password} type="text"></input>
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
             ))
            }
        </>
    );
}

export default Formulario;