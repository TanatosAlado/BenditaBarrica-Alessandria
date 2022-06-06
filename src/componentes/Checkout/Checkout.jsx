import React, { useState, useContext} from 'react'
import CartContext from '../CartContext/CartContext';
import './Checkout.css'
import baseVinos from '../../datos/Firebase'
import { collection, addDoc} from 'firebase/firestore';
import { Link} from 'react-router-dom';

import Spinner from '../Spinner/Spinner'



export const Checkout = () => {
    
    const {productosCarrito,totalCompra,clear}= useContext(CartContext)
    
    const [idOrden, setidOrden] = useState()

    const[carga, setCarga] = useState(false);
    
    const [buyer, setBuyer] = useState({
        Apellido:'',
        Nombre:'',
        Email:'',
        Telefono:'',
        Mensaje:''
    })

    const {Apellido,Nombre, Email, Telefono, Mensaje} = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generarPedido = async(data) => {
       
        try {
            const col = collection(baseVinos,"Orders")
            const order = await addDoc(col,data) 
            setidOrden(order.id)
            clear()

        } catch (error) {
        }
    }

    const enviar = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = productosCarrito.map(e=> {return {id:e.id,Nombre:e.nombre,Precio:e.precio,Cantidad:e.cantidad}})
        const total = totalCompra()
        const data = {buyer,dia,items,total}
        generarPedido(data)
    }
    
return (

    <>    
    {carga ? <Spinner />
        : (!idOrden&&
        
           <div className="contenedor">
                <div className="">
                    <div className="">
                        <h4 className="m-4">Finalizar Compra</h4> 
                    </div>
                        <form  onSubmit={enviar} className="formulario">
                            <p>
                                <label>Apellido</label>
                                <input type="text" name="Apellido"  value={Apellido}
                            onChange={Input}required/>
                            </p>
                            <p>
                                <label>Nombre</label>
                                <input type="text" name="Nombre"value={Nombre}  onChange={Input}
                        required/>
                            </p> 
                            <p>
                                <label>Correo</label>
                                <input type="email" name="Email" value={Email}
                            onChange={Input} required/>
                            </p>
                            <p>
                                <label>Teléfono</label>
                                <input type="number" name="Telefono" value={Telefono}
                            onChange={Input} required/>
                            </p>
                            <p className="full">
                                <label>Mensaje</label>
                                <textarea name="Mensaje"  value={Mensaje}
                            onChange={Input}placeholder="Opcional..."></textarea>
                            </p>
                            <p className="full">
                                <button className="boton-enviar">Enviar</button>
                            </p>
                        </form>
                </div>
            </div>)
    }

    <div>
    {
        idOrden&&(
            <div className='confirmacion'>
                <h3>GRACIAS POR SU COMPRA</h3>
                <h4>{`Su código de operación es: ${idOrden}`}</h4>
                <h4>{`Le enviarenos a ${Email} la factura electrónica de su compra`}</h4>
                <div className='botonCarroVacio2'><Link to={'/'}style={{ color: '#00264D' }} >Realizar otra compra </Link></div>
               
            </div>
            )
    }
    </div>

</>

)
}
