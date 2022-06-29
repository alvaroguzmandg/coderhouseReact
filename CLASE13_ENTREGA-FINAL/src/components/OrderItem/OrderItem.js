import {Card} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import React from "react"


export default function OrderItem({item}) {
  
  const navigate = useNavigate()
  
  return(
    <Card style={{ width: "30%", border: "0px" }} onClick={() => navigate(`/product/${item.id}`)}>
        <div className="order-producto-bloque"> 
            <span className="order-producto-imagen"><img src={item.image} alt='Foto del Producto'/></span>
            <span className="order-producto-nombre">{item.brand} {item.model}</span>
            <span className="order-producto-text">PRECIO UNITARIO: <span>${item.price}</span></span>
            <span className="order-producto-text">CANTIDAD:<span>{item.quantity}</span></span>
            <span className="order-producto-text">PRECIO TOTAL: <span>${item.quantity * item.price}</span></span>
            <Link to={`/product/${item.id}`}><span className="order-producto-boton">VER EN LA TIENDA</span></Link>
        </div>
      </Card>       
  )

}

