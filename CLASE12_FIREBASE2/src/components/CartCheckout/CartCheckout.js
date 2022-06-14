import CartItemList from "../../components/CartItemList/CartItemList";
import CartCount from "../../components/CartCount/CartCount";
import FormCarrito from "../../components/FormCarrito/FormCarrito";
import React from "react"
import{useContext} from "react";
import { CartContext } from "../../context/CartContext";

export default function CartCheckout({cart}) {
  
  const {deleteAll, precioTotal} = useContext(CartContext)
  const BorrarCarrito = ()=>{
    return(
      <span className="quitar-carrito" onClick={() =>deleteAll()}>VACIAR CARRITO DE COMPRAS</span>
    )
  }

  return(
    <>
        <div className="cart-left">
        <div className="cart-header">
          <span className="cart-container-title">TU CARRITO</span>
          <span className="cart-container-subtitle">Productos en el carrito: <CartCount/></span>
          <span className="cart-container-subtitle">Total a pagar: ${precioTotal}</span>
          <span className="cart-container-legal">
            Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.
          </span>
        </div>
          <div className="cart-items-container">
            <CartItemList items={cart} />
          </div>
        </div>
        <div className="cart-right">
          <FormCarrito></FormCarrito>
          <BorrarCarrito></BorrarCarrito>
        </div>
    </>
  )
}



