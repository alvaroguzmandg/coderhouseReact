import React from "react";
import {Link, NavLink} from "react-router-dom";
export default function CartIcon ({cantidad}){

  return(
    <div className="carrito">
      <NavLink to="/cart">
        <span className="carrito-icono">
          <img src="../images/cartIcon.png" alt="Icono carrito"/>
        </span>
      </NavLink>
      <span className="carrito-contador">{cantidad}</span>
    </div>
  );
}