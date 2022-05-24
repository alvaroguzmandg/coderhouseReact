import React from "react";
export default function CartIcon ({cantidad}){

  return(
    <div className="carrito">
      <span className="carrito-icono">
        <img src="images/cartIcon.png" alt="Icono carrito"/>
      </span>
      <span className="carrito-contador">{cantidad}</span>
    </div>
  );
}