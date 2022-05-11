import React, { useEffect, useState } from 'react'
import {getItem} from '../datos/personalFetch'
import { unProducto } from '../datos/nuestrosVinos'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
        getItem(2000, unProducto)
            .then((res) =>{
                setProducto(res)
            })
    }, [])
    
    return (
        
        producto?.map(detalle => (
            <ItemDetail
                key={detalle.id}
                nombre ={detalle.nombre}
                origen ={detalle.origen}
                cepa ={detalle.cepa}
                precio ={detalle.precio}
                maridaje ={detalle.maridaje}
                imagen ={detalle.imagen}
                stock ={detalle.stock}
                />
        ))
        
    )
}

export default ItemDetailContainer