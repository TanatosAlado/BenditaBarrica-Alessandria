import React from "react";
import miCarrito from '../images/cart.png';

export default function CartWidget(){

   //Aca puede ir contenido de JavaScript
    
    return (
            <div className="miCarro">
                <img src={miCarrito} alt="logo" />
            </div>
    );

}