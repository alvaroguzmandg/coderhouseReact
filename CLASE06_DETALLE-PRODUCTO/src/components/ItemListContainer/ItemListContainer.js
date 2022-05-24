import React, { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {productos} from "../../data/products.js"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
export default function ItemListContainer(){

  const [listaProductos, setListaProductos]=useState([])

  const task = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000)
  
})
useEffect(()=>{
  task
  .then((res)=> setListaProductos(res))
  .catch((error)=> console.log(error))
}, [])

  return(
    <div className="itemlist-container">

      {/* {productos.map((product) => (
          <ItemList product={product} key={product.id}/>
        )
      )} */}
      <ItemList listaProductos={listaProductos}/>
      <ItemDetailContainer id={8} />
    </div>
  )
}