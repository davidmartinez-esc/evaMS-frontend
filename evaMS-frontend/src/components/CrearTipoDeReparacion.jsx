import { useEffect, useState } from "react"
import tipoDeRepService from "../services/preciosPorRepService.js";
import '../css/ListaReparaciones.css'

export default function CrearTipoDeReparacion() {
  const [tipoReparacion, setTipoReparacion] = useState({
    nombreDeLaRep: "",
    precioGasolina: 0,
    precioDiesel: 0,
    precioHibrido: 0,
    precioElectrico: 0,
    
  })


  async function crearTipoDeReparacionHandler(event) {
    event.preventDefault();
    //console.log(tipoReparacion);
    try{      
      const response = await tipoDeRepService.crearTipoDeReparacion(tipoReparacion);

      //Reinicio los estados (reinicio los campos del formulario)
      setTipoReparacion({
        nombreDeLaRep: "",
        precioGasolina: 0,
        precioDiesel: 0,
        precioHibrido: 0,
        precioElectrico: 0
      })

      alert("Tipo de Reparacion con nombre: " + response.data.nombreDeLaRep + " creado con exito");
    }catch(error) {      
      alert("Error al crear el tipo Reparacion");
    }
  }

  function onChangeTipoDeReparacionHandler(event) {
    setTipoReparacion({      
      ...tipoReparacion,
      [event.target.id]: event.target.value,
    })
  }

  return (
    <div className="container">
      <h1 className="mb-4">Crear Tipo de Reparacion</h1>
      <form className="border row g-3 px-4">
        <div className="col-12">
          <label 
            htmlFor="nombreDeLaRep" 
            className="form-label"
            
          >
            Nombre de la Reparacion
          </label>
          <input 
            id="nombreDeLaRep" 
            type="text" 
            className="form-control" 
            value={tipoReparacion.nombreDeLaRep} 
            onChange={onChangeTipoDeReparacionHandler} 
          />          
        </div>

        <div className="col-md-6 mr-md-3">
          <label 
            htmlFor="precioGasolina" 
            className="form-label"
          >
            Precio para vehiculos con motores a Gasolina
          </label>
          <input 
            id="precioGasolina" 
            type="text" 
            className="form-control" 
            value={tipoReparacion.precioGasolina} 
            onChange={onChangeTipoDeReparacionHandler} 
          />
        </div>

        

        <div className="col-12">
          <label 
            htmlFor="precioDiesel" 
            className="form-label"
          >
            Precio para vehiculos con motores a Diesel
          </label>
          <input 
          id="precioDiesel" 
          type="text" 
          className="form-control" 
          value={tipoReparacion.precioDiesel} 
          onChange={onChangeTipoDeReparacionHandler} />
        </div>

        <div className="col-md-6">
          <label 
            htmlFor="precioHibrido" 
            className="form-label"
          >
            Precio para vehiculos con motores Hibridos
          </label>
          <input 
            id="precioHibrido" 
            type="text" 
            className="form-control" 
            value={tipoReparacion.precioHibrido} 
            onChange={onChangeTipoDeReparacionHandler} />
        </div>

        <div className="col-md-6">
          <label 
            htmlFor="precioElectrico" 
            className="form-label"
          >
            Precio para vehiculos con motores Electricos
          </label>
          <input 
            id="precioElectrico" 
            type="text" 
            className="form-control" 
            value={tipoReparacion.precioElectrico} 
            onChange={onChangeTipoDeReparacionHandler} />
        </div>

        

        <div className="col-12 mt-4 mb-4" >
          <button 
            type="submit" 
            className="btn btn-primary" 
            onClick={crearTipoDeReparacionHandler}
          >
            Crear Tipo de Reparacion
          </button>
        </div>
      </form>
    </div>
  )
}