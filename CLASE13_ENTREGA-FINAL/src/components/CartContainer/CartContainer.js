import CartCheckout from "../CartCheckout/CartCheckout";
import CartOrder from "../CartOrder/CartOrder";
import React from "react"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";

import {addDoc, getFirestore, collection, doc, runTransaction} from "firebase/firestore"

export default function CartContainer() {
  
  const { cart, precioTotal, deleteAll } = useContext(CartContext);
  const [data, setData] = useState();
  const [orderId, setOrderId] = useState();


const handleChange = (event) => {
  const { name, value } = event.target;
  setData({ ...data, [name]: value });
}

const order= {
  buyer: data, 
  items: cart,
  total: precioTotal,
};


const handleSubmit = async (event) =>{
  event.preventDefault();
  const db = getFirestore();
  const orderColection = collection(db, "orders");
  const productsCollection = collection(db, "productos")
  await addDoc(orderColection, order).then(({id}) => { 
    setOrderId(id)
    updateProducts()
    alert(`Tu orden nro ${id} fue realizada con éxito`)
    })
  .catch(error => console.log(error))
}

const updateProducts = async () => {
  const db = getFirestore ()
  cart.forEach( async (item) => {
    const productRef = doc(db, `productos`, item.id)
    await runTransaction(db, async (transaction) => {
    const transfDoc = await transaction.get(productRef);
    if (!transfDoc.exists()) {
      console.error("El documento no existe")
    }
    const newStock = transfDoc.data().stock - item.quantity;
    transaction.update(productRef, { stock: newStock });
  });
  })
}



  return(
    <>

      <div className="cart-container">
        {orderId ? <CartOrder orderId={orderId} order={order}></CartOrder> : <CartCheckout handleChange={handleChange} handleSubmit={handleSubmit}></CartCheckout>}
      </div>


    </>
  )
}



