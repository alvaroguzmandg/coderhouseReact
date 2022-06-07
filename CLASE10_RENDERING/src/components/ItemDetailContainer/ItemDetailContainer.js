
import React, { useEffect, useState } from "react"
import { productos } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail"
export default function ItemDetailContainer ({ title, productId }) {
  const [item, setItems] = useState({});

  const task = new Promise ((resolve, reject) => {
    resolve(productos);  
  })

  useEffect(() => {
    task
      .then((res)=> { 
        setItems(res.find(item => item.id === productId));
      })
      .catch((error)=> console.log(error))
    }, [productId]);
  return (
    <>
    <h1>{title}</h1>
    <ItemDetail item = {item} />  
    </>
  );
}

