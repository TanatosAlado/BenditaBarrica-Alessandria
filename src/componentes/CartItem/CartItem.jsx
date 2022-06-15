import React,{useContext} from 'react'
import CartContext from '../CartContext/CartContext';
import tacho from '../../images/tacho.png';
import './CartItem.css'



const CartItem=({item}) =>{
const {removeItem}= useContext(CartContext);

  return (
    <div className='contenedorGeneral'>
      <div className='contenedorCart bg-info'>
        <div>
            <div className='imagenCart'><img src={item.imagen}/></div> 
        </div>
        <div>
            <div className='nombreCart'>{item.nombre}</div>
            <div className='cantidadCart'>Cantidad: {item.cantidad}</div>
            <div className='precioCartUnit'>Precio Unitario $ {item.precio}</div>
            <div className='precioCartTotal'>Precio $  {(parseInt(item.precio))*(parseInt(item.cantidad)).toFixed(2)}</div>             
            <div className='removeItemCart'><button onClick={()=>removeItem(item.id)}><img src={tacho}></img></button></div>
        </div>
      </div>
    </div>
  )
  
}

export default CartItem