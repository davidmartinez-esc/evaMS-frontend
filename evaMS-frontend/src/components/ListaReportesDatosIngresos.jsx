import { useEffect, useState } from "react"
import gestionService from "../services/gestion.service.js";
import { Link } from "react-router-dom";
import '../css/CustomElements.css'

export default function ListaReportesDatosIngresos() {
  const [reportes, setReportes] = useState([]);

  async function fetchReportes() {
    try{      
      const response = await gestionService.getReportes();  
      setReportes(response.data);
    }catch(error) {
      alert("Error al obtener a los reportes.");
    }
  }

  
  useEffect(() => {
    fetchReportes();
  }, [])

  return (
    <div className="container border custom-table">
    <h1>Lista de Reportes</h1>
    <div className="table-responsive border custom-tabla-reportes">
      <table className="table table-sm border">
        <thead>
          <tr>
            <th scope="col">PATENTE</th>
            <th scope="col">MARCA</th>
            <th scope="col">MODELO</th>
            <th scope="col">TIPO</th>
            <th scope="col">TIPO DE MOTOR</th>
            <th scope="col">AÑO DE FABRICACION</th>
            <th scope="col">COSTO TOTAL</th>
            <th scope="col">MONTO TOTAL REPARACION</th>
            <th scope="col">MONTO RECARGOS</th>
            <th scope="col">MONTO DESCUENTOS</th>
            <th scope="col">MONTO IVA</th>
            <th scope="col">FECHA INGRESO</th>
            <th scope="col">HORA INGRESO</th>
            <th scope="col">FECHA SALIDA</th>
            <th scope="col">HORA SALIDA</th>
            <th scope="col">FECHA RECOGIDA</th>
            <th scope="col">HORA RECOGIDA</th>
          </tr>
        </thead>
        <tbody>        
          {                                 
            reportes.map((reporte, index) => (
              <tr key={index}>
          
                <td>{reporte.patente}</td>
                <td>{reporte.marca}</td>
                <td>{reporte.modelo}</td>
                <td>{reporte.tipo}</td>
                <td>{reporte.tipoMotor}</td>
          
                <td>{reporte.anio_Fabricacion}</td>
                <td>{reporte.costoTotal}</td>
                <td>{reporte.montoTotalReparaciones}</td>
                <td>{reporte.montoRecargos}</td>
                <td>{reporte.montoDescuentos}</td>
                <td>{reporte.montoIVA}</td>
                <td>{reporte.fechaIngreso}</td>
                <td>{reporte.horaIngreso}</td>
                <td>{reporte.fechaSalida}</td>
                <td>{reporte.horaSalida}</td>
                <td>{reporte.fechaRecogida}</td>
                <td>{reporte.horaRecogida}</td>

               
             
               
              </tr>
            
            ))
          }
        </tbody>
      </table>
    </div>  
  </div>  
  )
}