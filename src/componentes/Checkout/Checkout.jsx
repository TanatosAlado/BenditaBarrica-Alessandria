import React, { useState, useContext} from 'react'
import CartContext from '../CartContext/CartContext';
import './Checkout.css'
import baseVinos from '../../datos/Firebase'
import { collection, addDoc} from 'firebase/firestore';
import { Link} from 'react-router-dom';
import Spinner from '../Spinner/Spinner';




export const Checkout = () => {
    
    const {productosCarrito,totalCompra,clear}= useContext(CartContext)
    
    const [idOrden, setidOrden] = useState()

    const[carga, setCarga] = useState(false);
    
    const [buyer, setBuyer] = useState({
        Apellido:'',
        Nombre:'',
        Email:'',
        EmailConf:'',
        Telefono:'',
        Mensaje:''
    })

    const {Apellido,Nombre, Email, EmailConf, Telefono, Mensaje} = buyer

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
        finally{(setCarga(false))}
    }

    const enviar = (e) => {
        e.preventDefault()
        let mail1 = e.target.Email.value;
        let mail2 = e.target.EmailConf.value

        if (mail1 === mail2){
            const dia = new Date()
            const items = productosCarrito.map(e=> {return {id:e.id,Nombre:e.nombre,Precio:e.precio,Cantidad:e.cantidad}})
            const total = totalCompra()
            const data = {buyer,dia,items,total}
            generarPedido(data)
        }
        else{
            alert("Falla verificación de correo")
        }

    }
    
return (

    <>    
    {carga ? <Spinner />
        : (!idOrden&&

        <div className='salida'>
            <div className="contenedor">
                <div className="formularioCompleto">
                    <h4 className="m-4">Finalizar Compra</h4> 
                    <form  onSubmit={enviar} className="formulario">
                        <p>
                            <label>Apellido</label>
                            <input type="text" name="Apellido"  value={Apellido} onChange={Input} required/>
                        </p>
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="Nombre"value={Nombre} onChange={Input} required/>
                        </p> 
                        <p>
                            <label>Correo</label>
                            <input type="email" name="Email" value={Email} onChange={Input} required/>
                        </p>
                        <p>
                            <label>Confirmar Correo</label>
                            <input type="email" name="EmailConf" value={EmailConf} onChange={Input} required/>
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="number" name="Telefono" value={Telefono} onChange={Input} required/>
                        </p>
                        <p className="full">
                            <label>Mensaje</label>
                            <textarea name="Mensaje"  value={Mensaje} onChange={Input}placeholder="Opcional..."></textarea>
                        </p>
                        <p className="full">
                            <button className="botonEnviar">Enviar</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        )
    }

    <div>
    {
        idOrden&&( carga ? <Spinner /> : 
            <div className='fondoConfirmacion'>
                <div className='confirmacion'>
                    <h2>GRACIAS POR SU COMPRA</h2>
                    <h4>Código de operación</h4>
                    <div className='codigo'>
                        <h4>{`${idOrden}`}</h4>
                    </div>
                    <h4>{`Le enviarenos a ${Email} la factura electrónica de su compra`}</h4>
                    <div className='botonCarroVacio2'><Link to={'/'}style={{ color: '#00264D' }} >Realizar otra compra </Link></div>
                </div>
            </div>    
            
            )
    }
    </div>
</>
)
}
