import axios from "axios";


const REPARACIONES_API_URL = "http://localhost:8080/api/v1/repEspecifica";


function getReparacionesByIdIngreso(idIngreso) {  
  return axios.get(`${REPARACIONES_API_URL}/getByIdIngreso/${idIngreso}`)
}
function deleteReparacion(idReparacion) {
  return axios.delete(`${REPARACIONES_API_URL}/${idReparacion}`);  
}


export default {getReparacionesByIdIngreso,deleteReparacion}