import React, {useState} from 'react';
import casaboher from '../images/casaboher.png'

export default function ItemCount({stock}) {

    const [count, setCount] = useState(1);

    function adding(){
        count < stock ? setCount(count + 1) : alert('Llegaste al limite de Stock')
    }

    function subs () {
        if(count > 1){
            setCount(count -1);
        }
    }
    
    function onAdd () {
        alert('Has agregado ' + count + ' items en tu carrito');
    }
    
    return (
        <div className='formatoContador'>
            <img src={casaboher} alt="logo" />
            <div className='botonesContador'>
                <button onClick={subs}>-</button>
                <p className='margenes'>{count}</p>
                <button onClick={adding}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al Carro</button>
        </div>
    );

}