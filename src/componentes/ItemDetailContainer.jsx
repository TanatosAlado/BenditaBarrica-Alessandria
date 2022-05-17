import React, { useEffect, useState } from 'react'
import {getItem} from '../datos/personalFetch'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import productos from '../datos/nuestrosVinos'



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const[carga, setCarga] = useState(true);

    const{id}= useParams();

    useEffect(() => {
        getItem(productos, id)
            .then(res =>{setProducto(res)
                setCarga(false)
            })
            .catch(error => console.log("error: ", error));
    }, [id])
    
    return (
        <div className="posicion">
            {carga? <Spinner /> : <ItemDetail item={producto} />  }
        </div>
    )
}

export default ItemDetailContainer