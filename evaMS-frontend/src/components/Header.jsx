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
          <ul className="navbar-nav ">
            {/* <Link className="mr-3 mr-3" to="/estudiantes">Listado Estudiantes</Link> */}

              
                <div className="btn-group">
                    <button  className="btn dropdown-toggle " data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                      Listas
                    </button>
                    <div className="dropdown-menu">
 
                      <a className="dropdown-item" href="/vehiculos">Lista Vehiculos</a>
                      <a className="dropdown-item" href="/ingresos/reportesIngresos">Lista con todos los datos</a>
                    </div>
                  </div>
                
            
            <li className="nav-item ">
            <Link className="nav-link " to="/vehiculos/ingresar"><img className="nav-bar-image "src={iconoCrearAutomovil} alt="Imagen de un automovil con un +" /> Agregar Vehiculo</Link>
            </li>
            <li className="nav-item ">
            <Link className="nav-link" to="/tiposDeReparacion"><img className="nav-bar-image "src={iconoReparacion} alt="Imagen de una llave inglesa y un destornillador cruzados en X" /> Tipos De Reparacion</Link>
            </li>
            <li className="nav-item ">
            <Link className="nav-link" to="/ingresos/reportesIngresos"><img className="nav-bar-image "src={logoLista} alt="Imagen de una lista" /> Lista Todos los datos </Link>
            </li>
            
            


          </ul>
        </div>
      </div>
    </nav>
  )
}