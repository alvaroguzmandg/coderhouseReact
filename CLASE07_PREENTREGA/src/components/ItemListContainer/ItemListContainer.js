import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react"
import { productos } from "../../data/products";
import Loader from "../Loader/Loader";


export default function ItemListContainer ({categoryId}) {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const task = new Promise ((resolve, reject) => {
    
  setTimeout(() => {
    resolve(productos);
    setLoading(false);
  }, 2000)
})

useEffect(()=>{
  setLoading(true);
  task
  .then((res)=> { if(categoryId){
    <Loader/>
    setItems(res.filter(item => item.category_id === +categoryId));
  }
  else{
    setItems(res);
  }})
  .catch((error)=> console.log(error))
}, [categoryId])

if(loading){
  return(
  <Loader/>
  )
}
  
  return(
    <div className="itemlist-container">
      
      <ItemList items={items}/>
    </div>
  )
}