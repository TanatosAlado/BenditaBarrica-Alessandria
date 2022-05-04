import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer({greeting}){

   //Aca puede ir contenido de JavaScript
    
    return (
        <>
        <div className="bienvenida">
            Hola {greeting} bienvenido a nuestra tienda
        </div>
        <div>
            <ItemCount stock={5} />
        </div>
        </>
        
    );
}