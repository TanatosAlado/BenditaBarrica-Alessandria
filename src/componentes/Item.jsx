import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

function Item({id, nombre, precio, imagen, stock}) {

    console.log(id)
    console.log(nombre)
    console.log(precio)
    console.log(stock)
    


return (
    
    <div className='miCard'>
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Id: {id}</Card.Text>
                <Card.Text>Precio: {precio}</Card.Text>
                <Card.Text>Stock disponible: {stock}</Card.Text>
                <div className="detallesProducto"><Link to={`/item/${id}`}style={{ color: '#00264D' }} >Ver Detalles </Link></div>
                <ItemCount stock={stock} />
            </Card.Body>
        </Card>
    </div>   
)
}
export default Item
