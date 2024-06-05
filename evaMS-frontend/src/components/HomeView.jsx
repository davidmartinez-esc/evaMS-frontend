import { Link } from "react-router-dom";
import '../css/HomeView.css'
import logoAuto from '../assets/icono_auto.png';

export default function HomeView () {
  return (
    <div className="container text-center blue">
    <div className=" row border">
      <div className="col-md border ">
        
        <div className="col-md border card">
          
          <img src={logoAuto} id="car-icon" class="center"/>
          <h3>Autos Registrados</h3>
        </div>
        
      </div>
      
      <div className="col-md border">
        One of three columns
      </div>
    </div>
  </div>
  )
}