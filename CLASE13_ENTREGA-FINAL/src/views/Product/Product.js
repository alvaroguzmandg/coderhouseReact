// Vista de página de detakke dek producto

// Componentes utilizados
import NavBar from "../../components/Navbar/NavBar";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import Footer from "../../components/Footer/Footer";

import React from "react";
import { useParams } from "react-router-dom";

export default function Product () {
  
  const {productId} = useParams()

  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
          {/* Componente que muestra el detalle dle producto */}
          <ItemDetailContainer productId={productId}/>
        </main>
        <Footer/>
      </div>
    </>
  )

}