import React, {useState} from 'react';

export default function ItemCount({stock, inicial, onAdd}) {

    const [count, setCount] = useState(inicial);

    function adding(){
        count < stock ? setCount(count + 1) : alert('Llegaste al limite de Stock')
    }

    function subs () {
        if(count > 1){
            setCount(count -1);
        }
    }
    
    // function onAdd () {
    //     if (count===1){
    //         alert('Has agregado ' + count + ' item en tu carrito');    
    //     }
    //     else{
    //         alert('Has agregado ' + count + ' items en tu carrito');
    //     }
    // }
    
    return (
        <div className='formatoContador'>
            <div className='botonesContador'>
                <button onClick={subs}>-</button>
                <p className='margenes'>{count}</p>
                <button onClick={adding}>+</button>
            </div>
            <button className='botonCarrito' onClick={()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
    );

}