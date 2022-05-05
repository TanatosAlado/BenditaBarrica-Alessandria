import React from "react";
import barrica from '../images/barrica.png'
import CartWidget from "./CartWidget";

export default function NavBar(){

   //Aca puede ir contenido de JavaScript
    
    
return (
        <div className="barra">
            <img src={barrica} alt="logo" />
            <ul className="items">
                <li class="nav-item navFlex__item1">
                    <a href="#"><strong>Inicio</strong></a></li>
                <li class="nav-item navFlex__item1">
                    <a href="#"><strong>Productos</strong></a></li>
                <li class="nav-item navFlex__item1">
                    <a href="#"><strong>Contacto</strong></a></li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </div>
);
}