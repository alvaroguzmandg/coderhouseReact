import NavBar from "../../components/Navbar/NavBar";
import CartContainer from "../../components/CartContainer/CartContainer";
import Footer from "../../components/Footer/Footer";  

import {CartContext} from "../../context/CartContext"
import{useContext} from "react";
import { Link } from "react-router-dom";
import React from "react"

export default function Cart() {
    
  const {cart} = useContext(CartContext)

  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
        {cart.length > 0 ? <CartContainer cart={cart}/> : <div className="cart-empty">No hay productos en el carrito<Link to="/products">Volver al listado de productos</Link></div>}
        </main>
        <Footer/>
      </div>
    </>
  )
}



