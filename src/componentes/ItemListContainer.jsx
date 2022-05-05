import React, { useEffect, useState } from "react";
import ItemList from './ItemList'

import CustomFetch from '../datos/CustomFetch';
import productos from "../datos/BaseVinos";

export default function ItemListContainer(){
    
  const [prod, setProd] = useState([]);
  // const [loading, setLoading] = useState(true)


  useEffect (() => {
    CustomFetch(2000, productos)
    .then( resultado => setProd(resultado))
    .catch(error => console.log(error))
    // .finally(() => {
    //   setLoading(false)
    // })
  }, [prod])
    return (

    <>
        <div className="posicion">
            <ItemList productos={prod} />
        </div>
    </>
    );
}