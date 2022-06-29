//Componente que lista los productos en la vista del cart

//Componentes utilizados
import CartItem from "../CartItem/CartItem";

import {CartContext} from "../../context/CartContext"
import React, { useContext} from "react"

export default function CartItemList () {

  const { cart } = useContext(CartContext);

  return (
    <>
    {cart.map((item, index) =>(<CartItem key={item.id} item={item} />))}
    </>
  );
  
}




