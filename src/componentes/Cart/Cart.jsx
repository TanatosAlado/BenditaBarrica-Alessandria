import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';
import CartItem from "../CartItem/CartItem";
import carroVacio from '../../images/carrovacio.jpg';
import './Cart.css';

const Cart = () => {
  const {clear,productosCarrito,totalCompra}= useContext(CartContext);
  
  return (

    <>
    {      productosCarrito.length !== 0 ?
        (
          <div className='bg-info'>
            <div className=''>
            <h1 className='TituloCarrito'>Carritos de Compras</h1>
            
              {productosCarrito.map((item) => <CartItem key={item.id} item={item} />)}
              <br/>
              
              <br/>
                <div className='TotalCompra'>Total Compra: $ {totalCompra()}</div>
                <button className="vaciarCart" onClick={clear}>Vaciar Carrito</button>
            </div>
            {/* <button className="vaciarCart"><Link to={'/Checkout'}>Terminar Compra</Link></button> */}
            <button className='vaciarCart' ><Link to={'/Checkout'}>Terminar Compra</Link></button>
          </div>
        ) : (
          <div className='contenedorCart'>
            <div><h3 className='CarroVacio'>Carrito Vacio</h3></div>
            <img className='FotoCarroVacio' src={carroVacio}></img>
            <div className='botonCarroVacio'><button ><Link to={'/'}>Seguir comprando</Link></button></div>
          </div>
        )
    }
    
  </>
  )

}
  
export default Cart