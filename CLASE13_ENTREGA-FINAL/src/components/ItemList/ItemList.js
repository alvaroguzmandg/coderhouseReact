import Item from "../Item/Item"
import ItemListEmpty from "../ItemListEmpty/ItemListEmpty"

import React from "react"

export default function ItemList ({items, filter}) {

  const SearchResult = () =>{
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

  const ProductList = () =>{
    return(
      items.map((item) => (<Item key={item.id} item={item} />))
    )
  }

  return (
    <>
      {filter ? <SearchResult></SearchResult> : <ProductList></ProductList>}
    </>

  )
  
}

