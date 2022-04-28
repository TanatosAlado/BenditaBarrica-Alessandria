import React from "react";

export default function ItemListContainer({greeting}){

   //Aca puede ir contenido de JavaScript
    
    return (
    
        <>
        <div className="bienvenida">
            Hola {greeting} bienvenido a nuestra tienda
        </div>
            
        </>
    );
}