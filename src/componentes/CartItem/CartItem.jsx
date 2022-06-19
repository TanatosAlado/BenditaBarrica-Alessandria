import React,{useContext} from 'react'
import CartContext from '../CartContext/CartContext';
import tacho from '../../images/tacho.png';
import './CartItem.css'



const CartItem=({item}) =>{
const {removeItem}= useContext(CartContext);

  return (
    <div className='contenedorGeneral'>
      <div className='contenedorCart'>
        <div className='imagenCartItem'>
            <div className='imagenCart'><img src={item.imagen} alt="Imagen Cart"/></div> 
        </div>
        <div className='datosCartItem'>
            <div className='nombreCart'><strong><h4>{item.nombre}</h4></strong></div>
            <div className='cantidadCart'><h6>Cantidad: {item.cantidad}</h6></div>
            <div className='precioCartUnit'>Precio Unitario $ {item.precio}</div>
            <div className='precioCartTotal'>Sub Total $  {(parseInt(item.precio))*(parseInt(item.cantidad)).toFixed(2)}</div>             
            <div className='removeItemCart'><button onClick={()=>removeItem(item.id)}><img src={tacho} alt="tacho"></img></button></div>
        </div>
      </div>
    </div>
  )
}

export default CartItem