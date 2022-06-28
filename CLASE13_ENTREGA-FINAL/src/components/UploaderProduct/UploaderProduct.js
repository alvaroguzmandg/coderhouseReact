import React, { useState, useEffect} from "react"
import {addDoc, getFirestore, collection, getDocs} from "firebase/firestore"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export default function Uploader() {
  
  const MySwal = withReactContent(Swal)



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

    Swal.fire({
      icon: 'success',
      title: '¡Producto catalogado!',
      text: `${data.description}<br>${data.brand}`,
      imageUrl: `${data.image}`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: `${data.description}`,
      timer: 3500,
      confirmButtonText: 'CERRAR',
    })
  
    })
  .catch(error => console.log(error))

  document.getElementById('uploaderForm').reset();
}


const [categories, setCategories] = React.useState([]);

    useEffect(() => {

    const db = getFirestore()
    const categoriesRef = collection(db, "categorias")
        getDocs(categoriesRef).then(snapshots =>{
            setCategories(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))
        })

    }, []);

  return(
    
  <form id="uploaderForm" onSubmit={handleSubmit}>
    <h1>COMPLETÁ LOS DATOS DEL PRODUCTO</h1>
    <input className="campo-formulario" type="file" name="file" id="uploader" onChange={archivoHandler} required/>
    <input className="campo-formulario" type="text" name="brand" placeholder="Marca" onChange={handleChange} required/>   

    <select className="campo-formulario" name="category" id="category" onChange={handleChange} required>
    <option value="defalult" disabled selected>Elegí una categoria</option>
      {categories.map((cat) => (<option key={`${cat.id}`} value={`${cat.name}`}>{`Zapatillas de ${cat.name}`}</option>))}
    </select>

    <input className="campo-formulario" type="text" name="color" placeholder="Color" onChange={handleChange} required/>
    <input className="campo-formulario" type="text" name="description" placeholder="Descripción del producto" onChange={handleChange} required/>
    <input className="campo-formulario" type="text" name="model" placeholder="Modelo" onChange={handleChange} required/>
    <input className="campo-formulario" type="number" name="price" placeholder="Precio" onChange={handleChange} required/>
    <input className="campo-formulario" type="number" name="size" placeholder="Size" onChange={handleChange} required/>
    <input className="campo-formulario" type="number" name="stock" placeholder="Stock" onChange={handleChange} required/>
    <input className="finalizar-compra" type="submit" value="Cargar Archivo"/>
    
  </form>
    
  )
}



