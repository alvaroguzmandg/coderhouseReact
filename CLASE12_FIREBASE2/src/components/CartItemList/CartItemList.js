import CartItem from "../CartItem/CartItem";
import CartCount from "../CartCount/CartCount";
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




