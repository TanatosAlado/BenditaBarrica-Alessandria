import React, { useContext } from "react";
import miCarrito from '../images/cart.png';
import CartContext from "./CartContext";
import { Link } from 'react-router-dom';

export default function CartWidget(){

    const {acumularCarro}= useContext(CartContext);
    
    return (
        
        <div className="imagenYContador">
            <div className='estiloCarro'>
                <Link to={'/Cart'}><img src={miCarrito} alt="carrito compras"/></Link>
            </div>
            {acumularCarro()>0&&
            <button className='ContadorBotonCarro'>{acumularCarro()}</button>
            }
        </div>
        
    );

}