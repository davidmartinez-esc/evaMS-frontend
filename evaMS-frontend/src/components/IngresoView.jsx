import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import rdrService from "../services/detalleDeIngresoService";
import gestionService from "../services/gestion.service";
import precioPorRepService from "../services/preciosPorRepService.js";
export default function IngresoView() {
    const [tiposDeReparacion, setTiposDeReparacion] = useState([]);

    const {idIngreso} = useParams();

    const [reparaciones, setReparaciones] = useState([]);

    const [ingresos, setIngresos] = useState([]);

    const [ingreso, setIngreso] = useState(null);

    const [nuevaRepAplicadaRequest, setNuevaRepAplicada] = useState({
        idIngreso: idIngreso,
        tipoDeReparacion:"",
      })

    async function fetchIngreso() {    
        try{
            const response = await gestionService.getIngresoById(idIngreso)            
            setIngreso(response.data);  
            console.log(response.data); 
                            
        }catch(error) {
            alert("Error al obtener al ingreso");
        }
    }

    async function fetchReparaciones() {    
        try{
            const response = await rdrService.getReparacionesByIdIngreso(idIngreso)            
            setReparaciones(response.data);  
            console.log(response.data); 
                            
        }catch(error) {
            alert("Error al obtener el las reparaciones aplicadas al ingreso");
        }
    }

    async function fetchIngresos() {
        try{      
          const response = await gestionService.getIngresosByIdVehiculo(idVehiculo);  
          setIngresos(response.data);
        }catch(error) {
          alert("Error al obtener a los ingresos a reparacion.");
        }
      }

    async function fetchTiposDeReparacion() {
        try{      
          const response = await precioPorRepService.getAllTiposDeReparaciones();  
          setTiposDeReparacion(response.data);
        }catch(error) {
          alert("Error al obtener a las posibles reparaciones que se pueden aplicar.");
        }
      }


    async function deleteIngresoHandler(id) {
        //console.log(vehiculo);
        try{      
          const response = await gestionService.deleteIngreso(id);
          alert("Se borró el ingreso a reparacion con exito");
          window.location.reload();
        }catch(error) {      
          alert("Error al borrar el ingreso a reparacion");
        }
      }

      function onChangeNuevaRepAplicadaHandler(event) {
        setNuevaRepAplicada({      
          ...nuevaRepAplicadaRequest,
          [event.target.id]: event.target.value,
        })
      }

      async function createRepAplicadaRequestHandler(event) {
        event.preventDefault();
        try{      
          const response = await gestionService.crearEstudiante(nuevaRepAplicadaRequest);
            console.log(nuevaRepAplicadaRequest);
          //Reinicio los estados (reinicio los campos del formulario)
          setNuevaRepAplicada({
            tipoDeReparacion:""
          })
    
          alert("Enviada la request con exito");
        }catch(error) {
            console.log(nuevaRepAplicadaRequest);      
          alert("Error al enviar la request.");
        }
      }

    

      

    useEffect(() => {
        fetchIngreso();
        fetchReparaciones();
        fetchTiposDeReparacion();
        console.log(nuevaRepAplicadaRequest);
    }, [])

    return(
        <div>

            <h2 className="text-center">Datos del Ingreso</h2>
           
            <div>
                {ingreso ? (
                    <div>
                     <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">COSTO TOTAL</th>
                                    <th scope="col">FECHA INGRESO</th>
                                    <th scope="col">HORA INGRESO</th>
                                    <th scope="col">FECHA SALIDA</th>
                                    <th scope="col">HORA SALIDA</th>
                                    <th scope="col">FECHA RECOGIDA</th>
                                    <th scope="col">HORA RECOGIDA</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{ingreso.id}</td>
                                <td>{ingreso.costoTotal}</td>
                                <td>{ingreso.fechaIngreso}</td>
                                <td>{ingreso.horaIngreso}</td>
                                <td>{ingreso.fechaSalida}</td>
                                <td>{ingreso.horaSalida}</td>
                                <td>{ingreso.fechaRecogida}</td>
                                <td>{ingreso.horaRecogida}</td>
                            </tr>
                            </tbody>
                        </table>
                            
                            <div className="container">
                                        <h2 className="text-center">Reparaciones Por Ingreso</h2>
                                    
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">NOMBRE DE LA REP</th>
                                                <th scope="col">PRECIO DE LA REPRACION</th>
                                            </tr>
                                            </thead>
                                            <tbody>        
                                            {                                 
                                                reparaciones.map((reparacion, index) => (
                                                <tr key={index}>
                                                    <td>{reparacion.id}</td>
                                                    <td>{reparacion.nombreDeLaRep}</td>
                                                    <td>{reparacion.precioDeLaReparacion}</td>

                                                </tr>
                                                
                                                ))
                                            }
                                            </tbody>
                                        </table>
                            </div> 

                        
                    </div>
                )
                :
                (
                    <h3 className="text-center">Cargando...</h3>
                )
            
            }
            </div>

            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Agregar Tipo de Reparacion</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">

                            <div className="col-12">
                                <label 
                                    htmlFor="tipoDeReparacion" 
                                    className="form-label"
                                >
                                    Tipo de reparacion
                                </label>
                                <select 
                                    id="tipoDeReparacion" 
                                    className="form-select" 
                                    value={nuevaRepAplicadaRequest.tipoDeReparacion} 
                                    onChange={onChangeNuevaRepAplicadaHandler}>
                                    <option>Seleccionar una carrera...</option>
                                    {
                                    tiposDeReparacion !== null &&
                                    (
                                        tiposDeReparacion.map((tipoDeRep, index) => (
                                        <option 
                                            key={index} 
                                            value={tipoDeRep.nombreDeLaRep}
                                        >
                                            {tipoDeRep.nombreDeLaRep}
                                        </option>
                                        ))
                                    )              
                                    }
                                </select>
                            </div>

                            <div className="col-12 mt-4 mb-4 text-center" >
                                <button 
                                    type="submit" 
                                    className="btn  btn-success" 
                                    onClick={createRepAplicadaRequestHandler}
                                >
                                    Agregar Reparacion
                                </button>
                            </div>
    
                </div>
            </div>

        </div>
    )
}