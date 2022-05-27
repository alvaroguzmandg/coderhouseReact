import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react"
import { productos } from "../../data/products";
export default function ItemListContainer ({title, categoryId}) {
  const [items, setItems] = useState([]);
  
  const task = new Promise ((resolve, reject) => {
    
  setTimeout(() => {
    resolve(productos);
  }, 2000)
  
})

useEffect(()=>{
  task
  .then((res)=> { if(categoryId){
    setItems(productos.filter(item => item.category_id === +categoryId));
  }
  else{
    setItems(productos);
  }})
  .catch((error)=> console.log(error))
}, [categoryId])

  
  return(
    <div className="itemlist-container">
      <ItemList items={items}/>
    </div>
  )
}