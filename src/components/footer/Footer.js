import "./Footer.css";
function Footer() {
    return (
        <footer class="footer">
            <div class="text-footer">
                <div class="texto1-footer">
                    <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                        Elit quis enim ultricies ullamcorper.
                        Nunc aenean auctor vel diam dictum.</p>
                    <div class="redes">
                        <div class="red">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>

                </div>
                <div class="texto2-footer">
                    <div class="iconos">
                        <div class="direc">
                            <i class="fa-solid fa-location-dot"></i><p>Avenida carrera 8, #12A-42, Bogotá DC, Colombia</p>
                        </div>

                        <div class="direc">
                            <i class="fa-solid fa-phone"></i><p>+57 601 4567899</p>
                        </div>
                    </div>

                </div>
                <div class="texto3-footer">
                    <div>
                        <p>Políticas de privacidad</p>
                    </div>
                    <div id="separador">
                        <p>Políticas de privacidad</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;