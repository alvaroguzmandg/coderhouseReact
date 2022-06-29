// Vista de página que muestra todos los productos

// Componentes utilizados
import NavBar from "../../components/Navbar/NavBar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";

import React from "react"

export default function Products(){
  
  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
          {/* Componente que lista los productos */}
          <ItemListContainer/>
        </main>
        <Footer/>
      </div>
    </>
  )
  
}