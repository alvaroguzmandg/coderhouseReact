import { Link } from "react-router-dom";
import React from "react"

export default function CheckoutForm({handleChange, handleSubmit}) {
  
  return(
    <>
        <form onSubmit={handleSubmit}>
          <h1>COMPLETÁ TUS DATOS</h1>
          <input className="campo-formulario" type="text" name="nombre" placeholder="Nombre" onChange={handleChange}/>
          <input className="campo-formulario" type="email" name="email" id="email" placeholder="Correo electrónico" onChange={handleChange}/>
          <input className="campo-formulario" type="email" name="emailValidator" id="emailValidator" placeholder="Confirma tu correo electrónico" onChange={handleChange}/>
          <span className="campo-formulario-error" id="emailError">Por favor revisa el correo electrónico ingresado</span>
          <input className="campo-formulario" type="phone" name="telefono" placeholder="Telefono" onChange={handleChange}/>
          <input className="finalizar-compra" type="submit" value="Finalizar compra"/>
        </form>
        <Link className="checkout-back" to="/cart">VOLVER AL CARRITO</Link>
    </>
  )
  
}



