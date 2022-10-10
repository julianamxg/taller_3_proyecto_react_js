import { Link } from "react-router-dom";
import "./Encabezado-registro.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Encabezado() {
    const history = useNavigate();

    const [data, setData] = useState({
        _id: "", tipodoc: "", nombre: "", apellido: "",
        fnacimiento: "", genero: "", email: "", telefono: "", paisorigen: "", password: "", tipouser: "Huesped", img: ""
    });

    const handleChange = ({ target }) => {

        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const url = "https://hoteliakuepa.herokuapp.com/users";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(url, data);
        if (response.status === 201) {
            alert(
                'Error!',
                'Hubo un problema al registrar el estudiante!',
                'error'
            )
           
            history.push("/");

        } else {
            alert(
                'Guardado!',
                `El estudiante <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido guardado exitosamente!`,
                'success'
            )
        }
    }
    




    return (
        <div className="bodyR">
            <div class="encabezado">
                <div class="container-registro">

                    <h2 class="tituloR">Regístrate</h2>

                    <div onSubmit={handleSubmit} class="form">

                        <div class="izquierda">
                            <label>Tipo de documento</label>
                            <select name="tipodoc" onChange={handleChange} className="input2">
                                <option>Seleccione un Tipo de Documento</option>
                                <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                <option value="Cédula de extranjería">Cédula de extranjería</option>
                            </select>
                            <label>Nombres</label>
                            <input onChange={handleChange} name="nombre" value={data.nombre} className="input2" type="text"></input>

                            <label>Fecha de nacimiento</label>
                            <input onChange={handleChange} name="fnacimiento" value={data.fnacimiento} className="input2" type="date"></input>

                            <label>Email</label>
                            <input onChange={handleChange} name="email" value={data.email} className="input2" type="email"></input>

                            <label>País de origen</label>
                            <input onChange={handleChange} name="paisorigen" value={data.paisorigen} className="input2" type="text"></input>

                            <label>Contraseña</label>
                            <input onChange={handleChange} name="password" value={data.password} className="input2" type="password"></input>
                        </div>

                        <div class="derecha">
                            <label>Número de documento</label>
                            <input onChange={handleChange} name="_id" value={data._id} className="input2" type="number"></input>

                            <label>Apellidos</label>
                            <input onChange={handleChange} name="apellido" value={data.apellido} className="input2" type="text"></input>

                            <label>Género</label>
                            <select onChange={handleChange} name="genero" class="input2">
                                <option>Seleccione un género</option>
                                <option value="Mujer">Mujer</option>
                                <option value="Hombre">Hombre</option>
                                <option value="Otro">Otro</option>
                            </select>

                            <label>Telefono de contacto</label>
                            <input onChange={handleChange} name="telefono" value={data.telefono} className="input2" type="number"></input>

                            <label>Foto</label>
                            <input onChange={handleChange} name="img" value={data.img} className="input2" type="file" placeholder="Seleccionar archivo"></input>


                            <label>Confirmar contraseña</label>
                            <input onChange={handleChange} name="confirm" className="input2" type="password" placeholder=""></input>
                        </div>
                        <div class="terminos">
                            <input name="termino" className="input2" type="checkbox" class="termino"></input>
                            <label>Acepto Terminos y Condiciones</label>

                        </div>



                    </div>
                    <div class="terminos2">
                        <input id="terminosA" name="termino" className="input2" type="checkbox" class="termino2"></input>
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


                    <button onClick={handleSubmit} class="boton2">Ingresar</button>

                </div>

            </div>
        </div>
    );
}


export default Encabezado;