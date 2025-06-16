import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Acordeon from "./Acordeon";
import react from 'react';
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import './estilos.css'

function Inicios (props){
    return (
        <div className="ini">
            <Acordeon></Acordeon>
        </div>
    );
}

function Cursos (props){
    return (
        <div className="cur">
            <MiCar></MiCar>
        </div>
    );
}



function Principal (props){
    return (
        <div className="caja">
            <div className="Titulo">
                <header>
                <h2>
                    UMSA - ANEL ESCARLET ILIMORI TOTOLA
                </h2>
                </header>
            </div>
            <div className="menu">
            <nav>
                <h4>Contenido</h4>
                <ul>
                    <li>
                        <a href="/">Inicio</a>                        
                    </li>
                    <li>
                        <a href="/pagin1">Oferta de Cursos</a>
                    </li>
                </ul>
            </nav>
            <div className="CONTENIDO">
                <Routes>
                    <Route path="/" element={<Inicios></Inicios>}></Route>
                    <Route path="/pagin1" element={<Cursos></Cursos>}></Route>
                </Routes>
            </div>
            </div>
            <div className="contenido"></div>
            <div className="footer">
                <footer>
                    Pie de pagina
                </footer>
            </div>
        </div>

    )
}
export default Principal;