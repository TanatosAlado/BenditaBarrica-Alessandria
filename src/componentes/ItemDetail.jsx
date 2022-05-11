import React from 'react'


const ItemDetail = ({id, nombre, origen,cepa, precio, maridaje, stock, imagen}) => {

    return (

        <div className='cajaContenedora'>
            <div className='formatoDetalle'>
                <h1>Detalle Producto</h1>
                    <div className='containerDetail'>
                        
                        <img src={imagen} alt={nombre} /> 
                        <div>
                            <h2>Nombre: {nombre}</h2>
                            <h3>Precio: {precio}</h3>
                            <h3>Origen: {origen}</h3>
                            <h3>Cepa: {cepa}</h3>
                            <h4>Maridaje: {maridaje}</h4>
                            <h4>Stock: {stock}</h4>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail