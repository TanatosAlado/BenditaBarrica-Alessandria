import React, { useEffect, useState } from 'react'
import {getItem} from '../../datos/personalFetch'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
// import productos from '../../datos/nuestrosVinos'
import './ItemDetailContainer.css'
import BaseVinos from '../../datos/Firebase'
import { doc,getDoc } from 'firebase/firestore';



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const[carga, setCarga] = useState(true);

    const{id}= useParams();

    const getItem= async(idItem)=>{
        // try{
          const item= doc(BaseVinos,"Productos",idItem)
          const Resultado= await getDoc(item)
          const detalleItem={id:Resultado.id,...Resultado.data()}
          setProducto(detalleItem)
          console.log("prod")
          console.log(producto)
        // }catch(error){console.log(error)}
      
      }
    
       
        useEffect(() => {
          getItem(id)
        }, [id])


    // useEffect(() => {
    //     getItem(productos, id)
    //         .then(res =>{setProducto(res)
    //             setCarga(false)
    //         })
    //         .catch(error => console.log("error: ", error));
    // }, [id])


    
    return (
        <div className="posicion">
            {carga? <Spinner /> : <ItemDetail item={producto} />  }
        </div>
    )
}

export default ItemDetailContainer