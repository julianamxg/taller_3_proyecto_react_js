import {BrowserRouter as Router} from "react-router-dom"
const ConceptosBasicos = ()=>{
    return(
        <div>
            <h2>ConceptosBasicos</h2>
            <Router>
                <Route path="/" >
                    <h3>Inicio</h3>
                </Route>
                <Route path="/registro" >
                    <h3>Inicio sesión </h3>
                </Route>
            </Router>
        </div>
    );
};

export default ConceptosBasicos;