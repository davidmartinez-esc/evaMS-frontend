import { Link } from "react-router-dom";
import '../css/HomeView.css'
import logoAuto from '../assets/icono_auto.png';
import iconoReparacion from "../assets/icono_reparacion.png"
import { useEffect, useState } from "react";
import gestionService from "../services/gestion.service";

export default function HomeView () {
  const [totalIngresos,setTotalIngresos]=useState(0);
  const [totalVehiculos,setTotalVehiculos]=useState(0);

  async function fetchTotalVehiculos() {    
    try{
        const response = await gestionService.getNumeroDeVehiculosTotales()            
        setTotalVehiculos(response.data);  
        console.log(response.data); 
                        
    }catch(error) {
        alert("Error al obtener el numero de vehiculos registrados");
    }
  }

  async function fetchTotalIngresos() {    
    try{
        const response = await gestionService.getNumeroDeIngresosTotales()            
        setTotalIngresos(response.data);  
        console.log(response.data); 
                        
    }catch(error) {
        alert("Error al obtener el numero de ingresos a taller");
    }
  }

  useEffect(() => {
    fetchTotalIngresos();
    fetchTotalVehiculos();
      
}, [])

  return (
    <div className="container text-center blue">
    <div className=" row border">

      <div className="col-md  ">
        
        <div className="col-md border card">
          
          <img src={logoAuto} id="car-icon" class="center"/>
          <h1>{totalVehiculos}</h1>
          <h3>Autos Registrados</h3>
        </div>
        
      </div>
      
      <div className="col-md ">

          <div className="col-md border card">
              
              <img src={iconoReparacion} id="icono-reparacion" class="center"/>
              <h1>{totalIngresos}</h1>
              <h3>Ingresos al taller</h3>
          </div>
      </div>
    </div>
  </div>
  )
}