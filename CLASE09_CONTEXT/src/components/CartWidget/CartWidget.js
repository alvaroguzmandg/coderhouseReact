import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



export default function CartWidget (){
  const { cart } = React.useContext(CartContext);
  console.log(cart)
  return(
    <div className="carrito">
      <Link to="/cart">
        <span className="carrito-icono">
          <img src="../images/cartIcon.png" alt="Icono carrito"/>
        </span>
      </Link>
      <span className="carrito-contador">{cart.length}</span>
    </div>
  );
}