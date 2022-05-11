import React, { useEffect, useState } from "react";
import ItemList from './ItemList'
import personalFetch from '../datos/personalFetch';
import productos from "../datos/nuestrosVinos";

export default function ItemListContainer(){
    
  const [prod, setProd] = useState([]);

  useEffect (() => {
    personalFetch(10, productos)
    .then( resultado => setProd(resultado))
    .catch(error => console.log(error))

    return () => {
      //todo lo que sucede aca, se ejecuta antes del primer renderizado.
    };

  }, [prod])
  
    return (

    <>
        <div className="posicion">
            <ItemList productos={prod} />
        </div>
    </>
    );
}