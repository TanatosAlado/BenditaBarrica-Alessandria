import React, {useState} from 'react';
import './ItemCount.css'

export default function ItemCount({stock, inicial, onAdd}) {

    const [count, setCount] = useState(inicial);

    function adding(){
        count < stock ? setCount(count + 1) : alert('Llegaste al limite de Stock')
    }

    function subs () {
        if(count > inicial){
            setCount(count -1);
        }
    }
    
    return (
        <div className='formatoContador'>
            <div className='botonesContador'>
                <div>
                    <button className='botonCarrito' onClick={subs}>-</button>
                </div>
                <p className='margenes'>{count}</p>  
                <div>
                    <button className='botonCarrito' onClick={adding}>+</button>
                </div>
            </div>
            <button className='botonCarrito' onClick={()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
    );

}