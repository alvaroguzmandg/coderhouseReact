//Componente con la grilla de productos

//Componentes utilizados
import ItemList from "../ItemList/ItemList";
import ItemListEmpty from "../ItemListEmpty/ItemListEmpty";
import Loader from "../Loader/Loader";

import React, { useEffect, useState } from "react";
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore";

export default function ItemListContainer ({categoryId}) {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = React.useState([]);
  const [brand, setBrands] = React.useState([]);
  const [search, setSearch] = useState();

  
  useEffect(() => {
    
    //Una vez que los productos están cargados, desaparece el Loader
    (items !== []) ?  setTimeout(() => {setLoading(false);}, 1000) : setLoading(true)
    
    const db = getFirestore()
    if(categoryId){
      const queryP = query(collection(db, "productos"), where("category", "==", categoryId))
      getDocs(queryP).then((snapshots) =>{
        if(snapshots.size===0){
          setItems([])
        }
        setItems(snapshots.docs.map((doc)=>({id:doc.id, ...doc.data()})));
      });
    }else{
      const collectionRef = collection(db, "productos")
      getDocs(collectionRef).then(snapshots =>{
        setItems(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))
      })
    }

    // Muestra las categorias que están en la colección de Firebase
    const categoriesRef = collection(db, "categorias")
    getDocs(categoriesRef).then(snapshots =>{
      setCategories(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))
    })

    // Muestra las marcas que están en la colección de Firebase
    const brandsRef = collection(db, "marcas")
      getDocs(brandsRef).then(snapshots =>{
        setBrands(snapshots.docs.map(doc =>({id: doc.id, ...doc.data()})))
    })

  }, [categoryId]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  //Función para limpiar la búsqueda
  const limpiarBusqueda = (e) =>{
    e.preventDefault();
    setSearch("default");
    document.getElementById('category').value = "Todas las marcas";
  }

  //Componente con el título de la página filtrada
  const TituloBusqueda = () =>{
    return(
      <span className="titulo-busqueda">LISTADO DE PRODUCTOS {search}</span>
    )
  }

  return(
    <>
      <span className="filtro">
        <h2>Buscá por marca</h2>
        {/* Filtro de productos */}
        <form>
          <select className="campo-formulario" name="category" id="category" defaultValue="" onChange={handleSubmit} required>
          <option defaultValue="default">Todas las marcas</option>
            {
              // Toma las marcas traídas de Firebase y las muestra
              brand.map((bra) => (<option key={`${bra.id}`} value={`${bra.marca}`}>{`${bra.marca}`}</option>))
            }
          </select>
          <input type="reset" className="filtro-busqueda" onClick={limpiarBusqueda} value="Limpiar Búsqueda"/>
          {
            //Si hay un filtro realizado, muestra el título correspondiente
            (search) && search !== "default" ? <TituloBusqueda></TituloBusqueda> : false
          }
        </form>

        {/* Grilla de productos */}
        <div className="itemlist-container" id="itemlist-container">
          {
            //Esperando que carguen los productos, se muestra el loader
            // Si no hay productos, muestra la lista vacía
            // En caso de haber productos, muestra el listado y pasa las props del filtro en caso de ser aplicado
            loading ? <Loader/> : (items.length === 0) ? <ItemListEmpty></ItemListEmpty> : <ItemList filter={search} items={items}/>
          }
        </div>
      </span>
    </>
  )

}