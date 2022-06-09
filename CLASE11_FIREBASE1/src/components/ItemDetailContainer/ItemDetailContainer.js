import React, { useEffect, useState } from "react"
import {getFirestore, getDoc, doc} from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
export default function ItemDetailContainer ({ title, productId }) {

  const [item, setItem] = useState({});

  useEffect(() => {

    const db = getFirestore()  
    const productRef = doc(db, "productos", productId)
    getDoc(productRef).then(snapshot => {
      if (snapshot.exists()) {
        setItem({id: snapshot.id, ...snapshot.data()})
      }
    })

  }, [productId]);

  return (
    <>
    <h1>{title}</h1>
    <ItemDetail item={item} />
    </>
  );
}

