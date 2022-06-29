//Componente que renderiza el detalle del producto

//Componentes utilizados
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemListEmpty from "../ItemListEmpty/ItemListEmpty";
import Loader from "../Loader/Loader";

import React, { useEffect, useState } from "react"
import {getFirestore, getDoc, doc} from "firebase/firestore"


export default function ItemDetailContainer ({ productId }) {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore()  
    const productRef = doc(db, "productos", productId)
    getDoc(productRef).then(snapshot => {
      if (snapshot.exists()) {
        setItem({id: snapshot.id, ...snapshot.data()})
        //Se quita el componente Loader una vez que cargó el producto
        setLoading(false);
      }
      else{
        setItem([])
      }
    })
  }, [productId]);

  return (
    <>
      <div className="itemlist-container" id="itemlist-container">
        {
          //Esperando que carguen los productos en la promesa, se muestra el loader
          // Una vez que están los productos se revisa si el item solicitado existe
          // En caso que no haya items, se renderiza el componente ItemListEmpty que muestra que el item no existe
          // Si hay productos, se carga el detalle del producto
          loading ? <Loader/> : (item.length === 0) ? <ItemListEmpty></ItemListEmpty> : <ItemDetail item={item}/>
        }
      </div>
    </>
  );

}

