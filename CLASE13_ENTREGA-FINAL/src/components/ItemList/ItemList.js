//Componente que muestra el listado de Items

//Componentes utilizados
import Item from "../Item/Item"
import ItemListEmpty from "../ItemListEmpty/ItemListEmpty"

import React from "react"

export default function ItemList ({items, filter}) {

  //Componente que muestra los productos filtrados
  const SearchResult = () =>{
      //Se busca si la marca está en el listado de productos
      const gridSearch = items.filter((search) => search.brand === filter)
      if((gridSearch.length) === 0 && (filter !== "default")){
        return(
          <ItemListEmpty></ItemListEmpty>
        )
      }
      if(filter !== "default"){
      return (
        gridSearch.map((item) => (<Item key={item.id} item={item} />))
      )}if(gridSearch !== 0){
        return(
          <ProductList></ProductList>
          )
      }
  }

  //Componente con listado de productos sin filtro
  const ProductList = () =>{
    return(
      items.map((item) => (<Item key={item.id} item={item} />))
    )
  }

  return (
    <>
      {
        //Si existe un filtro aplicado, el resultado de búsqueda es filtrado
        //Si no existe un filtro, muestra el listado de productos completo
        filter ? <SearchResult></SearchResult> : <ProductList></ProductList>
      }
    </>

  )
  
}

