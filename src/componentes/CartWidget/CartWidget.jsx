import React, { useContext } from "react";
import miCarrito from '../../images/cart.png';
import CartContext from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import './CartWidget.css'

export default function CartWidget(){

    const {acumularCarro}= useContext(CartContext);
    
    return (
        
        <div className="carroYContador">
            <div className='estiloCarro'>
                <Link to={'/Cart'}><img src={miCarrito} alt="carrito compras"/></Link>
            </div>
            {acumularCarro()>0&&
            <button className='ContadorBotonCarro'>{acumularCarro()}</button>
            }
        </div>
        
    );

}