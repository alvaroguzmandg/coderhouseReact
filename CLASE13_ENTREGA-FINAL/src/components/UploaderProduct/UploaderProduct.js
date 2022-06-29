import React, { useState, useEffect} from "react"

import {addDoc, getFirestore, collection, getDocs} from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Uploader() {
  
  const MySwal = withReactContent(Swal)
  const [data, setData] = useState();
  const [productId, setproductId] = useState();
  const [categories, setCategories] = React.useState([]);
  const [brand, setBrands] = React.useState([]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  const archivoHandler = (e) =>{

    const file = e.target.files[0]
    const storage = getStorage();
    const storageRef = ref(storage, file.name);
    
    uploadBytes(storageRef, file).then((snapshot) => {
      //Sweet Alert - Cargando Archivo
      let timerInterval
      Swal.fire({
        title: '¡Subiendo archivo!',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
      })

      //Se recibe url de la imagen y se suma a la data
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
    
    //Se resetea el form
    document.getElementById('uploaderForm').reset();
  }


    useEffect(() => {

      const db = getFirestore()
      const categoriesRef = collection(db, "categorias")
      getDocs(categoriesRef).then(snapshots =>{
        setCategories(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))
      })

      const brandsRef = collection(db, "marcas")
      getDocs(brandsRef).then(snapshots =>{
        setBrands(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))
      })

    }, []);

  return(
    
    <form id="uploaderForm" onSubmit={handleSubmit}>
      <h1>COMPLETÁ LOS DATOS DEL PRODUCTO</h1>
      <input className="campo-formulario" type="file" name="file" id="uploader" onChange={archivoHandler} required/>

      <select className="campo-formulario" name="brand" defaultValue="Elegí una marca" id="brand" onChange={handleChange} required>
        <option defaultValue="Elegí una marca" disabled>Elegí una marca</option>
        {brand.map((bra) => (<option key={`${bra.id}`} value={`${bra.marca}`}>{`${bra.marca}`}</option>))}
      </select>

      <select className="campo-formulario" name="category" defaultValue="Elegí una categoría" id="category" onChange={handleChange} required>
      <option defaultValue="Elegí una categoría" disabled>Elegí una categoría</option>
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



