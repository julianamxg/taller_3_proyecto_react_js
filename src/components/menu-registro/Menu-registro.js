import "./Menu-registro.css";
import logov from "../nav/Hotelia horizontal blanco.svg";
function Menu() {
    return (
        <section class="menuu">
        <div class="logo">
        <img src={logov} alt="Hotelia" />
        </div>
        <div class="textos">
            <h4 class="desktop">Eres más que <br></br>bienvenido</h4>
            <h4 class="mobile">Un lugar en tu corazón</h4>
        </div>
</section>
    );
}

export default Menu;