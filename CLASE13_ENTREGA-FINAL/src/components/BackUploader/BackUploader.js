import { CartContext } from "../../context/CartContext";
import React, { useState, useContext } from "react"

import {addDoc, getFirestore, collection, doc, runTransaction} from "firebase/firestore"



export default function CartContainer() {
  const { cart, precioTotal, deleteAll } = useContext(CartContext);
  const [data, setData] = useState();
  const [productId, setproductId] = useState();


const handleChange = (event) => {
  const { name, value } = event.target;
  setData({ ...data, [name]: value });
}

//Upload file
const upload = async ({file})=>{
  //1. Referencia a donde se sube el archivo
  let storageRef = firebase.storage().ref().child(`images/${file.name}`)
  
  //2. Subir archivo
  await storageRef.put(file)
  //3. Retornar referencia
  return storageRef
}


const handleSubmit = async (event) =>{
  event.preventDefault();

  let fileInput = document.querySelector("#uploader")
  let file = fileInput.files[0]
  
  
  const db = getFirestore();

  const productsCollection = collection(db, "productos")
  await addDoc(productsCollection, data).then(({id}) => { 
    setproductId(id)
    // updateProducts()
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
    const image = transfDoc.data().image;
    transaction.update(productRef, { image: storageRef });

    const newStock = transfDoc.data().stock - item.quantity;
    transaction.update(productRef, { stock: newStock });
  });
  })


}

  return(
    
  <form onSubmit={handleSubmit}>
    <h1>COMPLETÁ LOS DATOS DEL PRODUCTO</h1>
    <input type="file" name="file" id="uploader"></input>
    <input className="campo-formulario" type="text" name="brand" placeholder="Marca" onChange={handleChange}/>
    <input className="campo-formulario" type="text" name="category" placeholder="Categoria" onChange={handleChange}/>
    <input className="campo-formulario" type="number" name="category_id" placeholder="ID categoria" onChange={handleChange}/>
    <input className="campo-formulario" type="text" name="color" placeholder="color" onChange={handleChange}/>
    <input className="campo-formulario" type="text" name="description" placeholder="description" onChange={handleChange}/>
    <input className="campo-formulario" type="text" name="model" placeholder="model" onChange={handleChange}/>
    <input className="campo-formulario" type="number" name="price" placeholder="price" onChange={handleChange}/>
    <input className="campo-formulario" type="number" name="size" placeholder="size" onChange={handleChange}/>
    <input className="campo-formulario" type="number" name="stock" placeholder="stock" onChange={handleChange}/>
    <input className="finalizar-compra" type="submit" value="Cargar Archivo"/>
  </form>
    
  )
}



