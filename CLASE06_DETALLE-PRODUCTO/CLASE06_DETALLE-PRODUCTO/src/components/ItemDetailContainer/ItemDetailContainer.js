import {productos} from "../../data/products.js"
import ItemDetail from "../ItemDetail/ItemDetail"
import React, { useEffect } from "react"


export default function ItemDetailContainer(){


  const[item, setItem] = React.useState([])
    
  const getItem = new Promise((resolve,reject) =>{
      setTimeout(() =>{
          resolve(productos);
      },4000)
  })

  const idProducto = 3;
  

  useEffect(()=>{
    getItem
    .then((productos)=> setItem(
      
      productos.find((producto)=>producto.id === idProducto)
      ))
    .catch((error)=> console.log(error))
  }, [])
      
    return (
      <ItemDetail item = {item} />  
      
    )

}
