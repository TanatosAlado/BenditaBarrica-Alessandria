import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner'
import './ItemListContainer.css'
import { collection, getDocs, query, where} from 'firebase/firestore';
import BaseVinos from '../../datos/Firebase';

export default function ItemListContainer(){
    
  const [prod, setProd] = useState([]);

  //Para utilizar spinner
  const [carga, setCarga] = useState(true);

  //Para utilizar parametros
  const {idCategoria} = useParams();  

  console.log("IdCategoria")
  console.log(idCategoria)
   
  const getProd = async (categoria) =>{ 
    try {
     
      const document = categoria ? query(collection(BaseVinos,"nuestrosVinos"), where('categoria',"==",categoria)):collection(BaseVinos,"nuestrosVinos")
      const col = await getDocs(document)
      const FirebaseData = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setProd(FirebaseData)
      
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
          {/* <ItemList productos={prod} /> */}
        </div>
    </>
    );
}