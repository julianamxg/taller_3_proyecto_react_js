import logoh from "./Hotelia horizontal blanco.svg";
import logoc from "./Hotelia campana.svg";
import logop from "./perfil.jpg";
import "./Menu.css";
function Menu(){
    return(
        <section class="menuu">
        <div class="persona">
              <div class="logo">
                    <img src={logoh} alt="Hotelia horizontal blanco"/>
                    <img src={logoc} alt="Hotelia campana"/>
              </div>

              <div class="descripcion">
                    <div class="fotoP">
                          <img src={logop} alt="perfil"/>
                    </div>
                    <div>
                   
                    <h3>Angie Vargas</h3>
                    <h4>angie@gmail.com</h4>
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
                    <a href="../index.html"><i class="fa-solid fa-arrow-right-from-bracket" id="serv"></i><p>Cerrar sesión</p></a>
              </div>
        </div>              
  </section>
    );
}

export default Menu;