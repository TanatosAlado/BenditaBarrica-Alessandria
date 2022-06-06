import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import './ItemDetailContainer.css'
import baseVinos from '../../datos/Firebase'
import { doc,getDoc } from 'firebase/firestore';



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const[carga, setCarga] = useState(true);

    const{id}= useParams();

    const getItem= async(idItem)=>{
        try{
          const item= doc(baseVinos,"nuestrosVinos",idItem)
          const resultado= await getDoc(item)
          const detalleItem={id:resultado.id,...resultado.data()}
          setProducto(detalleItem)
        }
        catch(error){console.log(error)}
        finally{(setCarga(false))}

      }
    
        useEffect(() => {
          getItem(id)
        }, [id])

    return (
        <div className="posicion">
            {carga? <Spinner /> : <ItemDetail item={producto} />  }
        </div>
    )
}

export default ItemDetailContainer