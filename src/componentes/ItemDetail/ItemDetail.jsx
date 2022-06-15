import React, { useContext, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import CartContext from '../CartContext/CartContext';
import './ItemDetail.css'


const ItemDetail = ({item}) => {

    const Cart= useContext(CartContext);
    const [acumulador, setacumulador] =useState(0);

    function AgregarACarrito(productosCarro) {
        Cart.addItem({cantidad: productosCarro,...item})
        setacumulador(productosCarro)
   }

    return (

<>
<div className='ordenyprogreso'>
            <div className='orden'>
                    <div className='car tamano'>
                        <img src={item?.imagen} alt={item?.nombre} /> 
                    </div>
                    <div className='car card-body'>
                        <h4 className="card-title">{item?.nombre}</h4>
                        <p className="card-text">Origen: {item?.origen}</p>
                        <p className="card-text">Cepa: {item?.cepa}</p>
                        <p className="card-text">Maridaje: {item?.maridaje}</p>
                        <p className="card-text"><strong>Precio: ${item?.precio}</strong></p>
                        <p className="card-text">Stock: {item?.stock}</p> 
                    </div>
            </div>
            <div className='car'>
                {acumulador!==0?(<button  className='botonCarritoFin'><Link to='/Cart' style={{ color: '#00264D' }}>Terminar mi Compra</Link></button>): <ItemCount inicial={1} stock={item?.stock} onAdd={AgregarACarrito}></ItemCount>}
            </div>
            
        </div>

{/* 
        <div className='cajaContenedora'>
            <div className='formatoDetalle'>
                    <div className='containerDetail'>
                        <img src={item?.imagen} alt={item?.nombre} /> 
                        <div className='detalleVino'>
                            <h4>{item?.nombre}</h4>
                            <h6>Origen: {item?.origen}</h6>
                            <h6>Cepa: {item?.cepa}</h6>
                            <h6>Maridaje: {item?.maridaje}</h6>
                            <h6><strong>Precio: ${item?.precio}</strong></h6>
                            <h6>Stock: {item?.stock}</h6> 
                        </div>
                    </div>
                    {acumulador!==0?(<button  className='botonCarritoFin'><Link to='/Cart' style={{ color: '#00264D' }}>Terminar mi Compra</Link></button>): <ItemCount inicial={1} stock={item?.stock} onAdd={AgregarACarrito}></ItemCount>}
            </div>
        </div>
 */}

</>

      


    )
}

export default ItemDetail