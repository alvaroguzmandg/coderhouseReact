//Muesta todos los datos de la orden de compra

//Componentes utilizados
import CheckoutOrderItem from "../CheckoutOrderItem/CheckoutOrderItem"

import React from "react"


export default function CheckoutOrder({order, orderId, data}) {
  
  return(
    <>
    <div className="checkout-order">
        <h1 className="checkout-title">Resumen de orden</h1>
        <span className="checkout-resume-info">
          <span className="checkout-order">Número de orden:
            <span className="checkout-order-data">{orderId}</span>
          </span>

          <span className="checkout-order">Nombre:
            <span className="checkout-order-data">{order.buyer.nombre}</span>
          </span>

          <span className="checkout-order">Email:
            <span className="checkout-order-data">{order.buyer.email}</span>
          </span>          

          <span className="checkout-order">Total: 
            <span className="checkout-order-data">${order.total}</span>
          </span> 
        </span>
        <h2 className="checkout-title">Listado de productos</h2>
        <span className="checkout-resume-products">
          
        {order.items.map((item, index) =>(<CheckoutOrderItem key={index} item={item} />))}
        </span>
    </div>
    </>
  )
}



