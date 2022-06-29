import ItemDetail from "../ItemDetail/ItemDetail"
import ItemListEmpty from "../ItemListEmpty/ItemListEmpty";
import Loader from "../Loader/Loader";

import React, { useEffect, useState } from "react"
import {getFirestore, getDoc, doc} from "firebase/firestore"


export default function ItemDetailContainer ({ title, productId }) {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1000)

    const db = getFirestore()  
    const productRef = doc(db, "productos", productId)
    getDoc(productRef).then(snapshot => {
      if (snapshot.exists()) {
        setItem({id: snapshot.id, ...snapshot.data()})
      }
      else{
        setItem([])
      }
    })

  }, [productId]);

  return (
    <>
      <div className="itemlist-container" id="itemlist-container">
        {loading ? <Loader/> : (item.length === 0) ? <ItemListEmpty></ItemListEmpty> : <ItemDetail item={item}/>}
      </div>
    </>
  );

}

