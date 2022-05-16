import React from 'react'


const ItemDetail = ({item}) => {

    

    return (

        <div className='cajaContenedora'>
            <div className='formatoDetalle'>
                <h1>Detalle Producto</h1>
                    <div className='containerDetail'>
                        
                        <img src={item?.imagen} alt={item?.nombre} /> 
                        <div>
                            <h2>Nombre: {item?.nombre}</h2>
                            <h3>Precio: {item?.precio}</h3>
                            <h3>Origen: {item?.origen}</h3>
                            <h3>Cepa: {item?.cepa}</h3>
                            <h4>Maridaje: {item?.maridaje}</h4>
                            <h4>Stock: {item?.stock}</h4>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail