import axios from "axios";


const PRECIO_REPARACIONES_URL_API = "http://localhost:8080/api/v1/precioPorRep/";


function getAllTiposDeReparaciones() {  
  return axios.get(PRECIO_REPARACIONES_URL_API);
}

function crearTipoDeReparacion(tipoReparacion) {
  return axios.post(PRECIO_REPARACIONES_URL_API, tipoReparacion);  
}
export default {getAllTiposDeReparaciones,crearTipoDeReparacion}