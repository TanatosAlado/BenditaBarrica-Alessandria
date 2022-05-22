import  { useState,createContext } from 'react'


const CartContext= createContext({
ProductosCarrito:[]

});


export const CartContextProvider=({children})=> {
  const [productosLista ,setProductosLista]=useState([]);
  
  const addItem=(Product)=>{
  const productoRepetido= productosLista.findIndex(producto=>producto.id===Product.id)
  if (productoRepetido !== -1) {

    setProductosLista(productosLista.map(prod => prod.id === Product.id ? {...prod, cantidad: prod.cantidad + Product.cantidad} : prod));
} else {
    setProductosLista([Product, ...productosLista]);
}
}

  const removeItem =(id)=>{
    setProductosLista(productosLista.find(i=>i.id!==id))

  }

  const clear=()=>{
    setProductosLista([]);
  };

  const isInCart =(id)=>{}

 
  
  return (
    <CartContext.Provider value={{
       ProductosCarrito:productosLista,
       addItem,
       removeItem,
       clear,
       isInCart
    }}>
      {children}
    </CartContext.Provider>
  )
}




export default CartContext;


