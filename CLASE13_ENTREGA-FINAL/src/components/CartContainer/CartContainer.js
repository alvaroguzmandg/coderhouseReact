//Componente que genera la vista del carrito con el listado de productos y el resumen del pedido

//Componentes utilizados
import CartItemList from "../../components/CartItemList/CartItemList";
import CartCount from "../../components/CartCount/CartCount";
import {NavLink} from "react-router-dom";

import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext";

export default function CartContainer() {
  
  //Variables de CartContext
  const { cart, precioTotal, deleteAll } = useContext(CartContext);

  //Botón para borrar el carrito
  const BorrarCarrito = ()=>{
    return(
      <span className="quitar-carrito" onClick={() =>deleteAll()}>VACIAR CARRITO DE COMPRAS</span>
    )
  }
  
  return(
    <>
      <div className="cart-container">

        <div className="cart-left">
          <div className="cart-header">
            <span className="cart-container-title">TU CARRITO</span>
            <span className="cart-container-legal">
              Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.
          </span>
          </div>
          <div className="cart-items-container">
            <CartItemList items={cart} />
          </div>
        </div>

        <div className="cart-right">
        <span className="cart-container-title-resume">RESUMEN DEL PEDIDO</span>
          <span className="cart-container-subtitle">Cantidad de productos: <CartCount/></span>
          <span className="cart-container-price">Total a pagar: ${precioTotal}</span>
          <NavLink className="cart-container-buy" to="/checkout">IR AL CHECKOUT</NavLink>
          <BorrarCarrito></BorrarCarrito>
        </div>

      </div>
      <span className="cart-bottom">
        
      </span>
    </>
  )

}



