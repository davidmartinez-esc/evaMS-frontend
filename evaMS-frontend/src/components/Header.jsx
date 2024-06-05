import { Link } from "react-router-dom";

import '../css/Header.css'
import logoLista from "../assets/icono_lista_blanco.png"
import iconoCrearAutomovil from "../assets/icono_auto_blanco_dos.png"
import iconoReparacion from "../assets/icono_reparacion_blanco.png"

export default function Header () {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg mb-3 navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">AutoFix</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav border">
            {/* <Link className="mr-3 mr-3" to="/estudiantes">Listado Estudiantes</Link> */}
            <li className="nav-item border">
            <Link className="nav-link" to="/vehiculos"><img className="nav-bar-image "src={logoLista} alt="Imagen de una lista" /> Lista Vehiculos </Link>
                </li>
            <li className="nav-item border">
            <Link className="nav-link " to="/vehiculos/ingresar"><img className="nav-bar-image "src={iconoCrearAutomovil} alt="Imagen de un automovil con un +" /> Crear Automovil</Link>
            </li>
            <li className="nav-item border">
            <Link className="nav-link" to="/tiposDeReparacion"><img className="nav-bar-image "src={iconoReparacion} alt="Imagen de una llave inglesa y un destornillador cruzados en X" /> Tipos De Reparacion</Link>
            </li>
            


          </ul>
        </div>
      </div>
    </nav>
  )
}