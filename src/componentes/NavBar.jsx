import React from "react";
import barrica from '../images/barrica.png';
import CartWidget from "./CartWidget";
import { Link, NavLink } from 'react-router-dom';

export default function NavBar(){

   //Aca puede ir contenido de JavaScript
    
    
return (
        <div className="barra">
            <img src={barrica} alt="logo" />
            <ul className="items">

                <li className="nav-item">
                    <NavLink to={'./'} className="nav-link" >Inicio</NavLink>
                </li>
                    <li className="nav-item">
                    <NavLink to={'/categoria/Vinos'} className="nav-link" aria-current="page">Vinos</NavLink>
                </li>
                <li className="nav-item">
                    <Link to={'/categoria/Whisky'} className="nav-link">Whiskys</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/categoria/Espirituosas'} className="nav-link">Espirituosas</Link>
                </li>
                <li>
                <CartWidget />
                </li>
            </ul>
        </div>
);
}