import React from "react"

export default function CartOrder({order}) {
  
  // const order= {
  //   buyer: data, 
  //   items: cart,
  //   total: precioTotal,
  // };
console.log(order)

  return(
    <>
        <h2>Resumen de orden</h2>
        Número de orden: {order.buyer.id}
        Nombre: {order.buyer.nombre}
        Email: {order.buyer.email}
        
        
    </>
  )
}



