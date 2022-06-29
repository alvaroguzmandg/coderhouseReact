// Vista de página del Carrito

// Componentes utilizados
import NavBar from "../../components/Navbar/NavBar";
import CartContainer from "../../components/CartContainer/CartContainer";
import Footer from "../../components/Footer/Footer";  

import {CartContext} from "../../context/CartContext"
import{useContext} from "react";
import React from "react"

export default function Cart() {
    
  const {cart, BackProduct} = useContext(CartContext)

  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
        {
          // Si hay productos en el carrito muestra el componente CartContainer
          // Si no hay productos en el carrito, muestra un componente que muestra que está vacío
          cart.length > 0 ? <CartContainer cart={cart}/> : <BackProduct text={`No hay productos en el carrito`}></BackProduct>
          }
        </main>
        <Footer/>
      </div>
    </>
  )
  
}



