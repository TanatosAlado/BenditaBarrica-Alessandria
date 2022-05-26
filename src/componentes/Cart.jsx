import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import CartContext from './CartContext';
import CartItem from "./CartItem";
import carroVacio from '../images/carrovacio.jpg'

const Cart = () => {
  const {clear,productosCarrito,totalCompra}= useContext(CartContext);
  
  return (

    <>
    {      productosCarrito.length !== 0 ?
        (
          <div className=''>
            <div className=''>
            <h1 className='TituloCarrito'>Carritos de Compras</h1>
            
              {productosCarrito.map((item) => <CartItem key={item.id} item={item} />)}
              <br/>
              
              <br/>
                <div className='TotalCompra'>Total Compra: $ {totalCompra()}</div>
              <button className="VaciarCart" onClick={clear}>Vaciar Carrito</button>
            </div>
          </div>
        ) : (
          <div className='contenedorCart'>
            <div> <h3 className='CarroVacio'>Carrito Vacio</h3></div>
            <img className='FotoCarroVacio' src={carroVacio}></img>
            <div className='botonCarroVacio'><button ><Link to={'/'}>Seguir comprando</Link></button></div>
          </div>
        )
    }
    
  </>
  )

}
  
export default Cart