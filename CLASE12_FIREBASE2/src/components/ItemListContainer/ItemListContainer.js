import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react"
// import { productos } from "../../data/products";
import Loader from "../Loader/Loader";
import {getFirestore, getDoc, getDocs, collection, doc, query, where} from "firebase/firestore"

export default function ItemListContainer ({categoryId}) {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
//   const task = new Promise ((resolve, reject) => {
    
//   setTimeout(() => {
//     resolve(productos);
//     setLoading(false);
//   }, 500)
// })

// useEffect(()=>{
//   setLoading(true);
//   task
//   .then((res)=> { if(categoryId){
//     setItems(res.filter(item => item.category_id === +categoryId));
//   }
//   else{
//     setItems(res);
//   }})
//   .catch((error)=> console.log(error))
// }, [categoryId])





useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 500)
  
  const db = getFirestore()
  if(categoryId){
    const queryP = query(collection(db, "productos"), where("category", "==", categoryId))
    getDocs(queryP).then((snapshots) =>{
      if(snapshots.size===0){
        console.log("No hay productos")
      }
      setItems(snapshots.docs.map((doc)=>({id:doc.id, ...doc.data()})));
    });
  }else{
  

  const collectionRef = collection(db, "productos")
    getDocs(collectionRef).then(snapshots =>{
      setItems(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))
    })
  }


}, [categoryId]);

return(
    <div className="itemlist-container">
      {loading ? <Loader/> : <ItemList items={items}/>}
    </div>
  )
}