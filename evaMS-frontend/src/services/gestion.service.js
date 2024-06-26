import axios from "axios";



const VEHICULOS_GET_API_URL = "http://localhost:8080/api/v1/vehiculo/";
const VEHICULO_POST_API_URL = "http://localhost:8080/api/v1/vehiculo/save";

const INGRESOS_API_URL = "http://localhost:8080/api/v1/ingresoAReparacion/";




function getVehiculos(){
  return axios.get(VEHICULOS_GET_API_URL);
}

function getVehiculoById(idVehiculo){
  return axios.get(`${VEHICULOS_GET_API_URL}${idVehiculo}`);
}

function crearVehiculo(vehiculo) {
  return axios.post(VEHICULO_POST_API_URL, vehiculo);  
}

function deleteVehiculo(idVehiculo) {
  return axios.delete(`${VEHICULOS_GET_API_URL}${idVehiculo}`);  
}

function crearIngreso(ingreso) {
  return axios.post(INGRESOS_API_URL, ingreso);  
}

function getIngresos(){
  return axios.get(INGRESOS_API_URL);
}

function getIngresosByIdVehiculo(idVehiculo){
  return axios.get(`${INGRESOS_API_URL}getById/${idVehiculo}`);
}

function deleteIngreso(idIngreso) {
  return axios.delete(`${INGRESOS_API_URL}${idIngreso}`);  
}

function getIngresoById(idIngreso){
  return axios.get(`${INGRESOS_API_URL}${idIngreso}`);
}

function getReportes(){
  return axios.get(`${INGRESOS_API_URL}getReportesTodosLosDatos`);
}
function asignarNuevaRepEspecificaEnIngreso(nuevaRepRequest) {
  return axios.post(`${INGRESOS_API_URL}asignarNuevaReparacion`, nuevaRepRequest);  
}

function calcularCostosFinales(ingreso) {
  return axios.put(`${INGRESOS_API_URL}pasoPorCaja`, ingreso);  
}

function getNumeroDeVehiculosTotales() {
  return axios.get(`${VEHICULOS_GET_API_URL}getTotalVehiculosRegistrados`);  
}

function getNumeroDeIngresosTotales() {
  return axios.get(`${INGRESOS_API_URL}getTotalDeIngresosARep`);  
}
export default {getVehiculos,crearVehiculo,
  deleteVehiculo,crearIngreso,getVehiculoById,getIngresos,getIngresosByIdVehiculo,deleteIngreso,getIngresoById,asignarNuevaRepEspecificaEnIngreso,
calcularCostosFinales,getNumeroDeVehiculosTotales,getNumeroDeIngresosTotales,getReportes}