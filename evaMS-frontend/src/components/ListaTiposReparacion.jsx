import { useEffect, useState } from "react"
import gestionService from "../services/gestion.service.js";
import { Link } from "react-router-dom";
import '../css/ListaReparaciones.css'
import preciosPorRepService from "../services/preciosPorRepService.js";
import '../css/CustomElements.css'
export default function ListaTiposReparacion() {
  const [reparaciones, setReparaciones] = useState([]);

  async function fetchTiposDeReparacions() {
    try{      
      const response = await preciosPorRepService.getAllTiposDeReparaciones();  
      setReparaciones(response.data);
    }catch(error) {
      alert("Error al obtener a las reparaciones.");
    }
  }

  /*
  async function deleteReparacioneHand(id) {
    //console.log(reparacion);
    try{      
      const response = await gestionService.deleteVehiculo(id);

 

      alert("Se borró el reparacion con exito");
      window.location.reload();
    }catch(error) {      
      alert("Error al borrar el reparacion");
    }
  }
  */
  
  useEffect(() => {
    fetchTiposDeReparacions();
  }, [])

  return (
    <div className="container custom-container border">
      <h1>Lista de Tipos de Reparacion</h1>
      <hr />
  
      <table className="table custom-table">
        <thead>
          <tr>
            <th scope="col">NOMBRE DE LA REPARACION</th>
            <th scope="col">PRECIO PARA MOTOR GASOLINA</th>
            <th scope="col">PRECIO PARA MOTOR DIESEL</th>
            <th scope="col">PRECIO PARA MOTOR HIBRIDO</th>
            <th scope="col">PRECIO PARA MOTOR ELECTRICO</th>

          </tr>
        </thead>
        <tbody>        
          {                                 
            reparaciones.map((reparacion, index) => (
              <tr key={index}>
                <td>{reparacion.nombreDeLaRep}</td>
                <td>{reparacion.precioGasolina}</td>
                <td>{reparacion.precioDiesel}</td>
                <td>{reparacion.precioHibrido}</td>
                <td>{reparacion.precioElectrico}</td>    
              </tr>
            
            ))
          }
        </tbody>
      </table>
      <div class="text-center">
      <Link to={`/tiposDeReparacion/ingresar`}><button id="botonCrearTipoReparacion" type="bbutton" className="btn btn-success btn-sm">Crear Nuevo Tipo De Reparacion</button></Link>

      </div>
    </div>   
  )
}