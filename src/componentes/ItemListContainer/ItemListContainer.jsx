import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner'
import './ItemListContainer.css'
import { collection, getDocs, query, where} from 'firebase/firestore';
import baseVinos from '../../datos/Firebase';

export default function ItemListContainer(){
    
  const [prod, setProd] = useState([]);

  //Para utilizar spinner
  const [carga, setCarga] = useState(true);

  //Para utilizar parametros
  const {idCategoria} = useParams();  
   
  const getProd = async (categoria) =>{ 
    try {
     
      const document = categoria ? query(collection(baseVinos,"nuestrosVinos"), where('categoria',"==",categoria)):collection(baseVinos,"nuestrosVinos")
      const col = await getDocs(document)
      const firebaseData = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setProd(firebaseData)
      
    }
    catch (error) {
      console.log(error)
    }
    finally{(setCarga(false))}
  }  
   
    useEffect(() => {
      getProd(idCategoria)
    }, [idCategoria])
  
    return (

    <>
        <div className="posicion">
          {carga? <Spinner /> : <ItemList productos={prod} />  }
        </div>
    </>
    );
}