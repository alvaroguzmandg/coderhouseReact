import NavBar from "../../components/Navbar/NavBar"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import Footer from "../../components/Footer/Footer"

import React from "react"

export default function Home(){
  
  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
        <h1>Listado de Productos</h1>
          <ItemListContainer title="Nuestros Productos"/>
        </main>
        <Footer/>
      </div>
    </>
  )

}

