import { CartContext } from "../../context/CartContext";
import React, { useState, useContext } from "react"

import {addDoc, getFirestore, collection, doc, runTransaction} from "firebase/firestore"


import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function CartContainer() {
  const { cart, precioTotal, deleteAll } = useContext(CartContext);
  const [data, setData] = useState();
  const [productId, setproductId] = useState();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    
  }

  

  

const archivoHandler = (e) =>{

  const file = e.target.files[0]
  const storage = getStorage();
  const storageRef = ref(storage, file.name);
  
    
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Archivo subido');
    getDownloadURL(storageRef)
    .then((url) => {
      setData({...data, image:url})
  })
  });
  
  
  
}


const handleSubmit = async (event) =>{
  event.preventDefault();
  
  const db = getFirestore();

  const productsCollection = collection(db, "productos")
  await addDoc(productsCollection, data).then(({id}) => { 
    setproductId(id)
    // updateProducts()
    })
  .catch(error => console.log(error))
}

const updateProducts = async () => {

  //Se carga el archivo 
  const input = document.getElementById("uploader");
  const file = input.files[0]
  const storage = getStorage();
  const storageRef = ref(storage, file.name);
  
    
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Archivo subido2');
  });
  


}

  return(
    
  <form onSubmit={handleSubmit}>
    <h1>COMPLETÁ LOS DATOS DEL PRODUCTO</h1>
    <input className="campo-formulario" type="file" name="file" id="uploader" onChange={archivoHandler}/>
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



