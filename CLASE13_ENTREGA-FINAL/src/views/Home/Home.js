// Vista de la página de inicio

// Componentes utilizados
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
          {/* Componente que lista los productos */}
          <ItemListContainer title="Nuestros Productos"/>
        </main>
        <Footer/>
      </div>
    </>
  )

}

