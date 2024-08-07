import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeView from './components/HomeView.jsx'
import ListaVehiculos from './components/ListaVehiculos.jsx'
import CrearVehiculo from './components/CrearVehiculo.jsx'
import CrearVehiculoRefactor from './components/CrearVehiculoRefactor.jsx'
import CrearIngresoRefactor from './components/CrearIngresoRefactor.jsx'
import VehiculoView from './components/VehiculoView.jsx'
import IngresoView from './components/IngresoView.jsx'
import ListaTiposReparacion from './components/ListaTiposReparacion.jsx'
import CrearTipoDeReparacion from './components/CrearTipoDeReparacion.jsx'
import ListaReportesDatosIngresos from './components/ListaReportesDatosIngresos.jsx'
import PreReporteUltimosTresMeses from './components/PreReporteUltimosTresMeses.jsx'
import ReporteUltimosTresMeses from './components/ReporteUltimosTresMeses.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Header/>            
        <Routes> 
          <Route path="/" element={<HomeView/>}/>
          <Route path="/vehiculos" element={<ListaVehiculos/>}/>
          <Route path="/vehiculos/ingresar" element={<CrearVehiculoRefactor/>}/>
          <Route path="/vehiculos/:idVehiculo" element={<VehiculoView/>}/>
          <Route path="/ingresos/crear/:idVehiculo" element={<CrearIngresoRefactor/>}/>
          <Route path="/ingresos/:idIngreso" element={<IngresoView/>}/>
          <Route path="/ingresos/reportesIngresos" element={<ListaReportesDatosIngresos/>}/>
          
          <Route path="/tiposDeReparacion" element={<ListaTiposReparacion/>}/>  
          <Route path="/tiposDeReparacion/ingresar" element={<CrearTipoDeReparacion/>}/>   

          <Route path="/reportes/reporteUltimosTresMeses" element={<PreReporteUltimosTresMeses/>}/>
          <Route path="/reportes/reporteUltimosTresMeses/:fechaRequest" element={<ReporteUltimosTresMeses/>}/>       
        </Routes>
      </BrowserRouter>

  )
}

export default App
