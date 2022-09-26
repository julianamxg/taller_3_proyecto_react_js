import "./Encabezado-registro.css";
function Encabezado() {
    return (
        <div class="encabezado">
            <div class="container">
                <div class="titulo">
                    <h2>Regístrate</h2>
                </div>
                <div class="form">

                    <div class="izquierda">
                        <label>Tipo de documento</label>
                        <input type="text" placeholder="Escoja una opción"></input>

                        <label>Nombres</label>
                        <input type="text"></input>

                        <label>Fecha de nacimiento</label>
                        <input type="text"></input>

                        <label>Email</label>
                        <input type="email"></input>

                        <label>País de origen</label>
                        <input type="text"></input>

                        <label>Contraseña</label>
                        <input type="password"></input>
                    </div>

                    <div class="derecha">
                        <label>Número de documento</label>
                        <input type="text"></input>

                        <label>Apellidos</label>
                        <input type="text"></input>

                        <label>Genero</label>
                        <div class="generos">
                            <input type="radio"></input>
                            <label>Mujer</label>

                            <input type="radio"></input>
                            <label>Hombre</label>

                            <input type="radio"></input>
                            <label>Otro</label>
                        </div>

                        <label>Telefono de contacto</label>
                        <input type="number"></input>

                        <label>Foto</label>
                        <input type="password" placeholder="Seleccionar archivo"></input>


                        <label>Confirmar contraseña</label>
                        <input type="password" placeholder=""></input>
                    </div>
                    <div class="terminos">
                        <input type="checkbox" class="termino"></input>
                        <label>Acepto Terminos y Condiciones</label>

                    </div>
                    <button class="boton"><a href="../assets/dashboard.html">Ingresar</a></button>


                </div>
                <div class="terminos2">
                    <input type="checkbox" class="termino2"></input>
                    <label>Acepto Terminos y Condiciones</label>

                </div>

                <button class="boton2"><a href="../assets/dashboard.html">Ingresar</a></button>


            </div>

        </div>

    );
}

export default Encabezado;