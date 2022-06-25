import NavBar from "../../components/Navbar/NavBar"
import Footer from "../../components/Footer/Footer"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
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

