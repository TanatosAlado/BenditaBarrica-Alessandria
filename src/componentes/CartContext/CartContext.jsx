import  { useState,createContext } from 'react'
import './CartContext.css';


const CartContext= createContext({
productosCarrito:[]

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
  setProductosLista(productosLista.filter((i)=>i.id!==id))

  }

  const clear=()=>{
    setProductosLista([]);
  };


  const acumularCarro=()=>{
    let total=0;
    productosLista.forEach((e)=>total=total+e.cantidad)
    
    return total
  }
  

  const totalCompra=()=>{
    let total=0;
    productosLista.forEach((e)=>total=total+ parseFloat(e.cantidad*e.precio))
    
    return total
  }

  return (
    <CartContext.Provider value={{
       productosCarrito:productosLista,
       addItem,
       removeItem,
       clear,
       acumularCarro,
       totalCompra
    }}>
      {children}
    </CartContext.Provider>
  )
}




export default CartContext;


