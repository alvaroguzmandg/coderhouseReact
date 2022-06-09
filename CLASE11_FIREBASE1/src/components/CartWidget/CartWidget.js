import CartCount from "../CartCount/CartCount";
import { Link } from "react-router-dom";
import React from "react"


export default function CartWidget () {

    
return(
  <div className="carrito">
  <Link to="/cart">
    <span className="carrito-icono">
      <img src="../images/cartIcon.png" alt="Icono carrito"/>
    </span>
    <CartCount/>
  </Link>
  
</div>
  )
}



