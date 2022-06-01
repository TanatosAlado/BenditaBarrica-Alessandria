import React,{useContext} from 'react'
import CartContext from '../CartContext/CartContext';
import tacho from '../../images/tacho.png';
import './CartItem.css'



const CartItem=({item}) =>{
const {removeItem}= useContext(CartContext);

  return (
    <div className='contenedorGeneral'>
      <div className='ContenedorCart'>
        <div className='ImagenCart'><img src={item.imagen}/></div> 
        <div className='NombreCart'>{item.nombre}</div>
        <div className='CantidadCart'>Cantidad: {item.cantidad}</div>
        <div className='PrecioCartUnit'>Precio Unitario $ {item.precio}</div>
        <div className='PrecioCartTotal'>Precio $  {(parseInt(item.precio))*(parseInt(item.cantidad)).toFixed(2)}</div> 
        <div className='RemoveItemCart'><button onClick={()=>removeItem(item.id)}><img src={tacho}></img></button></div>
      </div>
    </div>
  )
  
}

export default CartItem