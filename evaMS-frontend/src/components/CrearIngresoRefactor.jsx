import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import gestionService from "../services/gestion.service.js";
import '../css/CustomForm.css'

export default function CrearIngresoRefactor() {
  
  const {idVehiculo} =  useParams();

  const [costoTotal, setCostoTotal] = useState(0);
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [horaIngreso, setHoraIngreso] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [horaSalida, setHoraSalida] = useState("");
  const [fechaRecogida, setFechaRecogida] = useState("");
  const [horaRecogida, setHoraRecogida] = useState("");
  const [kilometrajeAlIngreso,setKilometrajeAlIngreso] = useState(0);


 
  async function handleCrearIngreso(e) {
    e.preventDefault();
    try{
      const response = await gestionService.crearIngreso({
        idVehiculo,
        costoTotal,
        fechaIngreso,
        horaIngreso,
        fechaSalida,
        horaSalida,
        fechaRecogida,
        horaRecogida,
        kilometrajeAlIngreso
      })

     
      setCostoTotal(0);
      setFechaIngreso("");
      setHoraIngreso("");
      setFechaSalida("");
      setHoraSalida("");
      setFechaRecogida("");
      setHoraRecogida("");
      setKilometrajeAlIngreso(0);

      alert("Ingreso creado con exito");
    }catch(error) {
      console.log(error);
      alert("Error al crear el ingreso.");
    }

  }
 
  function handleRutChange(event) {
    setRut(event.target.value);
  }

  return (
    <div className="container">
      <h1 className="mb-4">Crear Ingreso A Taller</h1>
      
      <form className="border row g-3 px-4 custom-form">
      

        <div className="col-md-6">
          <label htmlFor="fechaIngreso" className="form-label">Fecha Ingreso</label>
          <input 
            id="fechaIngreso" 
            type="text" 
            placeholder="AAAA-MM-DD"
            className="form-control" 
            value={fechaIngreso} 
            onChange={e => setFechaIngreso(e.target.value)} 
          />          
        </div>

        <div className="col-md-6 mr-md-3">
          <label htmlFor="horaIngreso" className="form-label">Hora Ingreso</label>
          <input id="horaIngreso" type="text" className="form-control" placeholder="HH:mm"
          value={horaIngreso} 
          onChange={e => setHoraIngreso(e.target.value)} />
        </div>
    
        <div className="col-md-6">
          <label htmlFor="fechaSalida" className="form-label">Fecha Salida</label>
          <input id="fechaSalida" type="text" className="form-control" placeholder="AAAA-MM-DD" value={fechaSalida} onChange={e => setFechaSalida(e.target.value)} />
        </div>
      
        
        <div className="col-md-6">
          <label htmlFor="horaSalida" className="form-label">Hora Salida</label>
          <input id="horaSalida" type="text" className="form-control" placeholder="HH:mm" value={horaSalida} onChange={e => setHoraSalida(e.target.value)} />
        </div>

        <div className="col-md-6">
          <label htmlFor="fechaRecogida" className="form-label">Fecha Recogida</label>
          <input id="fechaRecogida" type="text" className="form-control"  placeholder="AAAA-MM-DD" value={fechaRecogida} onChange={e => setFechaRecogida(e.target.value)} />
        </div>

        <div className="col-md-6">
          <label htmlFor="horaRecogida" className="form-label">Hora Recogida</label>
          <input id="horaRecogida" type="text" placeholder="HH:mm" className="form-control" value={horaRecogida} onChange={e => setHoraRecogida(e.target.value)} />
        
        </div>

        <div className="col-md-6">
          <label htmlFor="kilometrajeAlIngreso" className="form-label">Kilometraje</label>
          <input id="kilometrajeAlIngreso" type="text" placeholder="0" className="form-control" value={kilometrajeAlIngreso} onChange={e => setKilometrajeAlIngreso(e.target.value)} />
        
        </div>

        <div className="col-12 mt-4 mb-4" >
          <button type="submit" className="btn btn-primary" onClick={handleCrearIngreso}>
            Crear Ingreso
          </button>
        </div>
      </form>
    </div>
  )
}