import React from 'react'
import Item from '../Item/Item'

function ItemList({productos}) {

return(

    <>
    
    <h3>Nuestros vinos</h3>
    <div>
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