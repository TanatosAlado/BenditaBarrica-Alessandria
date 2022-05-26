import React, { useContext, useState} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
// import Cart from './Cart'
import CartContext from './CartContext';



const ItemDetail = ({item}) => {

    const Cart= useContext(CartContext);
    const [acumulador, setacumulador] =useState(0);

    function AgregarACarrito(productosCarro) {
        Cart.addItem({cantidad: productosCarro,...item})
        setacumulador(productosCarro)
   }

    return (

        <div className='cajaContenedora'>
            <div className='formatoDetalle'>
                <h1>Detalle Producto</h1>
                    <div className='containerDetail'>
                        
                        <img src={item?.imagen} alt={item?.nombre} /> 
                        <div>
                            <h3>Nombre: {item?.nombre}</h3>
                            <h4>Origen: {item?.origen}</h4>
                            <h5>Cepa: {item?.cepa}</h5>
                            <h5>Maridaje: {item?.maridaje}</h5>
                            <h4><strong>Precio: ${item?.precio}</strong></h4>
                            <h5>Stock: {item?.stock}</h5>
                            {acumulador!==0?(<button  className='botonCarrito'><Link to='/Cart' style={{ color: '#00264D' }}>Terminar mi Compra</Link></button>): <ItemCount inicial={1} stock={item?.stock} onAdd={AgregarACarrito}></ItemCount>}

                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail