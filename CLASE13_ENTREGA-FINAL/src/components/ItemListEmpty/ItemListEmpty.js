//Componente que muestra un aviso de lista vacía

import React from "react"
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




