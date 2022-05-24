import React from "react";
import Item from "../Item/Item"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"


const ItemList = ({listaProductos})=>{
  return(
    <>
      {listaProductos.map((producto)=> <Item producto={producto} key={producto.id} />)}     
    </>  
  )
}

export default ItemList





