import p1 from "./perfil1.jpg";
import p2 from "./perfil2.jpg";
import p3 from "./perfil3.jpg";
import "./Calificaciones.css";
function Calificaciones() {
    return (
        <section class="calific">
            <div class="titulo"><h1>Nuestros usuarios dicen...</h1></div>
            <div class="cards">
                <div id="op" >
                    <div class="nombreP">
                        <img src={p1} alt="Diego" />
                        <h5>Diego rodriguez</h5>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star roja"></i>
                    </div>

                    <div class="descripcion">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
                <div id="op">
                    <div class="nombreP">
                        <img src={p2} alt="Diana" />
                        <h5>Diana Garcìa</h5>

                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="descripcion">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                            Elit quis enim ultricies ullamcorper.
                            Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
                <div id="op">
                    <div class="nombreP">
                        <img src={p3} alt="Diego" />
                        <h5>Diego rodriguez</h5>

                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star roja"></i>
                    </div>
                    <div class="descripcion">
                        <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.Elit quis enim
                            ultricies ullamcorper. Nunc aenean auctor vel diam dictum.</p>
                    </div>
                </div>
            </div>
        </section>
                    );
}

                    export default Calificaciones;