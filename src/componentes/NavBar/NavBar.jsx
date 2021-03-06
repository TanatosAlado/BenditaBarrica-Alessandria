import React from "react";
import barrica from '../../images/barrica.png';
import CartWidget from "../CartWidget/CartWidget.jsx";
import { NavLink } from 'react-router-dom';
import './NavBar.css'

export default function NavBar(){

   //Aca puede ir contenido de JavaScript
    
    
return (
        <div className="entorno">
            <div className="barra">
                <img src={barrica} alt="logo" />
                <ul className="items">

                    <li className="nav-item">
                        <NavLink to={'./'} className="nav-link" >Inicio</NavLink>
                    </li>
                        <li className="nav-item">
                        <NavLink to={'/categoria/Malbec'} className="nav-link" aria-current="page">Malbec</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/categoria/Cabernet'} className="nav-link">Cabernet</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/categoria/Otros'} className="nav-link">Otras Cepas</NavLink>
                    </li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </div>
        </div>
        
);
}