import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

function Item({id, nombre, precio, imagen, stock}) {

return (
    
    <div className='miCard'>
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Precio: {precio}</Card.Text>
                <Card.Text>Stock disponible: {stock}</Card.Text>
                <ItemCount stock={stock} />
            </Card.Body>
        </Card>
    </div>
    
    
)
}

export default Item