import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/PreReporteUUltimosTresMesesStyle.css"

export default function PreReporteUltimosTresMeses() {
    
    const [reporteRequest, setReporteRequest] = useState({
        fechaRequest:"",
      })

    function onChangeRequestHandler(event) {
        setReporteRequest({      
          ...reporteRequest,
          [event.target.id]: event.target.value,
        })
      }
     

    return(
        <div>
            <div className="container border"> 
              <h2 className="text-center"> Reporte Tres Ultimos Meses </h2>
              <hr />
              <p className="text-center"> El siguiente reporte toma los tres ultimos meses (contando el ingresado por el usuario) para generar
                un reporte que incluye el numero de reparaciones efectuadas en cada mes y el monto recaudado por estas, además contiene el porcentaje de variacion
                entre los datos de los diferentes meses
              </p>
                  <div className="container" id="select-send">
                  <select 
                      id="fechaRequest" 
                      className="form-select" 
                      value={reporteRequest.fechaRequest} 
                      onChange={onChangeRequestHandler}>
                      <option>Seleccione el mes</option>
                      <option value="1">ENERO</option>
                      <option value="2">FEBRERO</option>
                      <option value="3">MARZO</option>
                      <option value="4">ABRIL</option>
                      <option value="5">MAYO</option>
                      <option value="6">JUNIO</option>
                      <option value="7">JULIO</option>
                      <option value="8">AGOSTO</option>
                      <option value="9">SEPTIEMBRE</option>
                      <option value="10">OCTUBRE</option>
                      <option value="11">NOVIEMBRE</option>
                      <option value="12">DICIEMBRE</option>
                  </select>

                  <td>
                  
                  <Link to={`/reportes/reporteUltimosTresMeses/${reporteRequest.fechaRequest}`}> <button type="bbutton" className="btn btn-primary btn-m">Generar Reporte</button></Link>
                  
                </td>
                  </div>
                  
            </div>

          
        </div>
    )
}