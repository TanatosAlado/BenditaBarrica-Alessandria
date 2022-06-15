import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

function ItemList({productos}) {

return(

    <>
    <div>
        <h2><span>Nuestros vinos</span></h2>
    </div>
    <div className='matriz'>
        {productos?.map(prod => (
                    <Item
                    key={prod.id}
                    id={prod.id}
                    nombre ={prod.nombre}
                    precio ={prod.precio}
                    imagen ={prod.imagen}
                    stock = {prod.stock}
                    />  
                ))}
    </div>
    </>
    

)
}

export default ItemList