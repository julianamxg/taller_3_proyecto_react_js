import logov from "./Hotelia-negro-vertical.svg";
import "./Descripcion.css"
function Descripcion(){
    return(
        <section class="inf">
        <div class="contenidoInfo">
            <div id="textoInf">
                <p>Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en 
                    un contexo de lujo donde interactúan los negocios, el ocio y el descanso, gracias
                    a su estratégica ubicación rodeada de bancos , restaurantes de alta cocina, centros 
                    comerciales, almacenes de lujo y amblemáticos parques para aprovechar la naturaleza 
                    antre la ciudad caminar y hacer un poco de deporte al aire libre están 
                    el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño,
                    saludable a base de productos locales, cargados de lo mejor de la tradición colombiana.</p>
            </div>
            <div id="imgInf"><img src={logov} alt="Hotelia" /></div>
        </div>
    </section>
    );
}

export default Descripcion;