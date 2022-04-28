import React from "react";
import miCarrito from '../images/cart.png';

export default function CartWidget(){

   //Aca puede ir contenido de JavaScript
    
    return (
    
        <>
            <div className="myCard">
                <img src={miCarrito} alt="logo" />
            </div>
        </>
    );

}