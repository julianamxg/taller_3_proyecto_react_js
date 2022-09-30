import { Link } from "react-router-dom";
import logoh from "./Hotelia horizontal blanco.svg";
import logoc from "./hotelia campana.svg";
import logop from "./perfil.jpg";
import "./Menu.css";
function Menu() {
      return (
            <section class="menuDash">
                  <div class="persona">
                        <div class="logoDash">
                              <img src={logoh} alt="Hotelia horizontal blanco" class="desktop" />
                              <img src={logoc} alt="Hotelia campana" class="mobile" />
                        </div>

                        <div class="descripcionDash">
                              <div class="fotoP">
                                    <img src={logop} alt="perfil" />
                              </div>
                              <div>

                                    <h3>Angie Vargas</h3>
                                    <h4>angievargas2@gmail.com</h4>
                              </div>
                        </div>
                  </div>
                  <div class="servicios">
                        <div class="op">
                              <a href="" class="serv"><i class="fa-solid fa-bed" id="iconS"></i><p>Habitaciones</p></a>
                              <a href="" class="serv"><i class="fa-solid fa-bell-concierge" id="iconS"></i><p>Reservas</p></a>
                              <a href="" class="serv"><i class="fa-solid fa-bed" id="iconS"></i><p>Habitaciones</p></a>
                              <a href="" class="serv"><i class="fa-solid fa-bell-concierge" id="iconS"></i><p>Habitaciones</p></a>
                        </div>
                        <div class="cerrar">
                        <Link to="/login"><i class="fa-solid fa-arrow-right-from-bracket a" id="serv"></i><p>Cerrar sesión</p></Link>
                        </div>
                  </div>
            </section>
      );
}

export default Menu;