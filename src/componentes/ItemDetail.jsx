import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {

    

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
                            <ItemCount stock={item?.stock} />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail