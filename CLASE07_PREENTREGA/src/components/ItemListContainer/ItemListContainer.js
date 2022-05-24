import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react"
import { productos } from "../../data/products";
export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = React.useState([]);
  
  React.useEffect(() => {

    
    if(categoryId){
      setItems(productos.filter(item => item.category_id === +categoryId));
    }
    else{
      setItems(productos);
    }
  },[categoryId])
  
  
  return(
    <div className="itemlist-container">
      <ItemList items={items}/>
    </div>
  )
}