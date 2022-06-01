import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
// import personalFetch from '../../datos/personalFetch';
// import productos from "../../datos/nuestrosVinos";
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
    console.log("mi categoria")
    console.log(categoria)
    // try {
     
      const document = categoria ? query(collection(BaseVinos,"Productos")):collection(BaseVinos,"Productos")
      const col = await getDocs(document)
      const FirebaseData = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setProd(FirebaseData)
      console.log("prod")
      console.log(prod)
    // } catch (error) {
    //   console.log(error)
    // }
  }  
   
    useEffect(() => {
      getProd(idCategoria)
    }, [idCategoria])




  // useEffect (() => {
  //   setCarga(true)
  //   personalFetch(productos, idCategoria)
    
  //   .then( resultado => {setProd(resultado)
  //     setCarga(false)})

  //   .catch(error => console.log(error))

  // }, [idCategoria]);

  
  
    return (

    <>
        <div className="posicion">
          {/* {carga? <Spinner /> : <ItemList productos={prod} />  } */}
          <ItemList productos={prod} />  
            
        </div>
    </>
    );
}