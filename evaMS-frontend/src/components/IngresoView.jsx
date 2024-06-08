import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import rdrService from "../services/detalleDeIngresoService";
import gestionService from "../services/gestion.service";
import precioPorRepService from "../services/preciosPorRepService.js";
import '../css/CustomElements.css'
import '../css/IngresoView.css'
export default function IngresoView() {
    const [tiposDeReparacion, setTiposDeReparacion] = useState([]);

    const [usaBono, setUsaBono] = useState(false);

    const handleUsaBonoChange = () => {
      setUsaBono(!usaBono); 
    };

    const {idIngreso} = useParams();

    const [reparaciones, setReparaciones] = useState([]);

    const [ingresos, setIngresos] = useState([]);

    const [ingreso, setIngreso] = useState(null);

    const [nuevaRepAplicadaRequest, setNuevaRepAplicada] = useState({
        idIngreso: idIngreso,
        tipoDeReparacion:"",
        vehiculo: 0,
        fechaReparacion:"",
        horaReparacion:""
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

    async function fetchTiposDeReparacion() {
        try{      
          const response = await precioPorRepService.getAllTiposDeReparaciones();  
          setTiposDeReparacion(response.data);
        }catch(error) {
          alert("Error al obtener a las posibles reparaciones que se pueden aplicar.");
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
          
          const response = await gestionService.asignarNuevaRepEspecificaEnIngreso(nuevaRepAplicadaRequest);
            console.log(nuevaRepAplicadaRequest);
          //Reinicio los estados (reinicio los campos del formulario)
          setNuevaRepAplicada({
            tipoDeReparacion:""
          })
          window.location.reload();
          alert("Enviada la request con exito");
        }catch(error) {
            console.log(nuevaRepAplicadaRequest);      
          alert("Error al enviar la request.");
        }
      }


      async function calcularCostosFinales(event) {
        event.preventDefault();
        try{  
          
          const response = await gestionService.calcularCostosFinales({
            usaBono,    
            ingreso
        });
           
          //Reinicio los estados (reinicio los campos del formulario)
         
          window.location.reload();
          alert("Calculado el costo final con exito");
        }catch(error) {
               
          alert("Error al calcular el costo final");
        }
      }

      async function deleteReparacionHandler(id) {
        //console.log(vehiculo);
        try{      
          const response = await rdrService.deleteReparacion(id);
    
     
    
          alert("Se borró la reparacion especifica con exito");
          window.location.reload();
        }catch(error) {      
          alert("Error al borrar la reparacion especifica ");
        }
      }

    useEffect(() => {
        fetchIngreso();
        fetchReparaciones();
        fetchTiposDeReparacion();  
    }, [])

    return(
        <div>

           
           
            <div>
              
                {ingreso ? (
                    <div className="container border " id="tabla-datos-ingreso">
                            <h2 className="text-center" id="primer-titulo">Datos del Ingreso</h2>
                            <hr />
                            <div className="container" >
                                   
                                    <table className="table custom-table">
                                
                                    <thead>
                                        <tr>
                    
                                            <th scope="col">COSTO TOTAL</th>
                                            <th scope="col">FECHA INGRESO</th>
                                            <th scope="col">HORA INGRESO</th>
                                            <th scope="col">FECHA SALIDA</th>
                                            <th scope="col">HORA SALIDA</th>
                                            <th scope="col">FECHA RECOGIDA</th>
                                            <th scope="col">HORA RECOGIDA</th>
                                            <th scope="col">MONTO REPARACIONES</th>
                                            <th scope="col">MONTO DESCUENTOS</th>
                                            <th scope="col">MONTO RECARGOS</th>
                                            <th scope="col">MONTO IVA</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        
                                        <td>{ingreso.costoTotal}</td>
                                        <td>{ingreso.fechaIngreso}</td>
                                        <td>{ingreso.horaIngreso}</td>
                                        <td>{ingreso.fechaSalida}</td>
                                        <td>{ingreso.horaSalida}</td>
                                        <td>{ingreso.fechaRecogida}</td>
                                        <td>{ingreso.horaRecogida}</td>
                                        <td>{ingreso.montoTotalReparaciones}</td>
                                        <td>{ingreso.montoDescuentos}</td>
                                        <td>{ingreso.montoRecargos}</td>
                                        <td>{ingreso.montoIVA}</td>
                                        
                                        </tr>
                                     </tbody>
                                    </table>

                                    <div >
                                            <label>
                                                <input 
                                                
                                                type="checkbox" 
                                                checked={usaBono} 
                                                onChange={handleUsaBonoChange}
                                                
                                                />
                                                Asignar Bono
                                            </label>
                                        </div>

                                    <button 
                                            type="submit" 
                                            className="btn  btn-success" 
                                            onClick={calcularCostosFinales}
                                            id="boton-nueva-rep"
                                        >
                                            Calcular Costos
                                    </button>
                            </div>
                            
                            <div className="container">
                                        <h2 className="text-center">Reparaciones Por Ingreso</h2>
                                        <hr />
                                        <table className="table custom-table">
                                            <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">NOMBRE DE LA REP</th>
                                                <th scope="col">PRECIO DE LA REPRACION</th>
                                                <th scope="col">FECHA DE LA REPARACION</th>
                                                <th scope="col">HORA DE LA REPARACION</th>
                                            </tr>
                                            </thead>
                                            <tbody>        
                                            {                                 
                                                reparaciones.map((reparacion, index) => (
                                                <tr key={index}>
                                                    <td>{reparacion.id}</td>
                                                    <td>{reparacion.nombreDeLaRep}</td>
                                                    <td>{reparacion.precioDeLaReparacion}</td>
                                                    <td>{reparacion.fechaReparacion}</td>
                                                    <td>{reparacion.horaReparacion}</td>
                                                    <td> <button 
                                                        type="button" 
                                                        className="btn btn-sm btn-danger btn-solid" 
                                                        onClick={()=>deleteReparacionHandler(reparacion.id)}
                                                        >
                                                        Borrar Reparacion
                                                    </button>
                                                    </td>
                                                </tr>
                                                
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                        
                                        
                                        
                                        <button id="boton-nueva-rep" className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Nueva Reparacion</button>
                            </div> 

                        
                    </div>
                )
                :
                (
                    <h3 className="text-center">Cargando datos...</h3>
                )
            
            } 
            </div>

            

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Agregar Reparacion Especifica</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body small">

                            <div className="col-12">
                                <label 
                                    htmlFor="tipoDeReparacion" 
                                    className="form-label"
                                >
                                    Tipo de reparación:
                                </label>
                                <select 
                                    id="tipoDeReparacion" 
                                    className="form-select" 
                                    value={nuevaRepAplicadaRequest.tipoDeReparacion} 
                                    onChange={onChangeNuevaRepAplicadaHandler}>
                                    <option>Seleccionar una reparacion...</option>
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

                            <div>
                                <label 
                                  htmlFor="fechaReparacion" 
                                  className="form-label"
                                >
                                  Fecha Reparacion
                                </label>
                                <input 
                                  id="fechaReparacion" 
                                  type="text" 
                                  className="form-control"
                                  placeholder="AAAA-MM-DD" 
                                  value={nuevaRepAplicadaRequest.fechaReparacion} 
                                  onChange={onChangeNuevaRepAplicadaHandler}
                                />
                            </div>

                            <div>
                                <label htmlFor="horaReparacion" className="form-label">Hora Reparacion</label>
                                <input id="horaReparacion" type="text" className="form-control" placeholder="HH:mm"
                                value={nuevaRepAplicadaRequest.horaReparacion} 
                                onChange={onChangeNuevaRepAplicadaHandler} />
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