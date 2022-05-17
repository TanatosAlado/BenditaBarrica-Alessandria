import React, { useEffect, useState } from "react";
import ItemList from './ItemList'
import personalFetch from '../datos/personalFetch';
import productos from "../datos/nuestrosVinos";
import { useParams } from "react-router-dom";
import Spinner from './Spinner'

export default function ItemListContainer(){
    
  const [prod, setProd] = useState([]);

  //Para utilizar spinner
  const [carga, setCarga] = useState(true);

  //Para utilizar parametros
  const {idCategoria} = useParams();  

  useEffect (() => {
    personalFetch(productos, idCategoria)
    
    .then( resultado => {setProd(resultado)
      setCarga(false)})

    .catch(error => console.log(error))

  }, [idCategoria]);

  
  
    return (

    <>
        <div className="posicion">
          {carga? <Spinner /> : <ItemList productos={prod} />  }
            
        </div>
    </>
    );
}