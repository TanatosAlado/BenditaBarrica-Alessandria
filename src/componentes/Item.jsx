import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function Item({id, nombre, precio, imagen, stock}) {

return (
    <div className='conte'>
        <div className='miCard'>
            <Card key={id} style={{ width: '18rem' }}>
                <div className='imagenCard'>
                    <Card.Img variant="top" src={imagen} />
                </div>
                <div className='cuerpoCard'>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>Precio: ${precio}</Card.Text>
                        <Card.Text>Stock: {stock}</Card.Text>
                        <div className="detallesProducto"><Link to={`/item/${id}`}style={{ color: '#00264D' }} >Ver Detalles </Link></div>
                    </Card.Body>
                </div>
            </Card>
        </div>   
    </div>
    
)
}
export default Item
