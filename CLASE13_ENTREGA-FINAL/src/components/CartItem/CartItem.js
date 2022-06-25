import {Card} from 'react-bootstrap'
import {Link} from "react-router-dom"
import React from "react";
import {CartContext} from "../../context/CartContext"

export default function CartItem({item}) {

  

  const {removeFromCart} = React.useContext(CartContext)
  const RestButton = ()=>{
    return(
      <span className="boton-quitar" onClick={() =>removeFromCart(item)}>Quitar Producto</span>
    )
  }

  return(
    
    <Card>
        <div className="cart-product"> 
            <span className="cart-product-image">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt='Foto del Producto'/>
              </Link>
            </span>
            <span className="cart-product-info">
              <span className="cart-product-name">{item.brand} {item.model}</span>
              <span className="cart-product-price">Precio <span>${item.price}</span></span>
              <span className="cart-product-quantity">Cantidad: {item.quantity}</span>  
              <RestButton></RestButton>
            </span>
        </div>
        
      </Card>       
  )
}

