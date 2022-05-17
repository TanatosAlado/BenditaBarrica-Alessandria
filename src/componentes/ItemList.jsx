import React from 'react'
import Item from './Item'

function ItemList({productos}) {

return(
    
     productos?.map(prod => (
                <Item
                key={prod.id}
                id={prod.id}
                nombre ={prod.nombre}
                precio ={prod.precio}
                imagen ={prod.imagen}
                stock = {prod.stock}
                />  
            ))
)
}

export default ItemList