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
  }, 500)
})

useEffect(()=>{
  setLoading(true);
  task
  .then((res)=> { if(categoryId){
    setItems(res.filter(item => item.category_id === +categoryId));
  }
  else{
    setItems(res);
  }})
  .catch((error)=> console.log(error))
}, [categoryId])


return(
    <div className="itemlist-container">
      {loading ? <Loader/> : <ItemList items={items}/>}
    </div>
  )
}