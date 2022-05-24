
import React from "react";
import { productos } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail"
export default function ItemDetailContainer ({ title, productId }) {
  const [item, setItem] = React.useState({});
  React.useEffect(() => {
    setItem(productos.find(item => item.id === productId));
    console.log(productId)
  }, [productId]);
  return (
    <>
    <h1>{title}</h1>
    <ItemDetail item = {item} />  
    </>
  );
}