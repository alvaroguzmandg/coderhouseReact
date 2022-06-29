import React from "react"
import { Link } from "react-router-dom"
import {CartContext} from "../../context/CartContext"
import{useContext} from "react";

export default function ItemListEmpty () {
  
  const {BackProduct} = useContext(CartContext)

  return (
    <>
      <div className="itemlist-container" id="itemlist-container">
        <BackProduct text={`¡Lo sentimos, no encontramos lo que buscas!`}></BackProduct>
      </div>
    </>
  );
  
}




