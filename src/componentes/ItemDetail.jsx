import React, {useState} from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import Cart from './Cart'


const ItemDetail = ({item}) => {

    const [acumulador, setAcumulador] = useState(0);

    const [Carro, setCarro] = useState(0);
    function carrito(productosCarro) {
        setCarro(productosCarro);
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
                            <h4><strong>Precio: {item?.precio}</strong></h4>
                            <h5>Stock: {item?.stock}</h5>
                            {Carro? <button className='botonCarro'><Link to='/Cart' style={{ color: '#00264D' }}>Finalizar la compra de ({Carro} productos)</Link></button>:
                            <ItemCount inicial={1} stock={item?.stock} onAdd={carrito}></ItemCount>}  

                            {/* <ItemCount stock={item?.stock} /> */}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail