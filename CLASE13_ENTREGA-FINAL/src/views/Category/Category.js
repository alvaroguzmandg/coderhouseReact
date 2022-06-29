import NavBar from "../../components/Navbar/NavBar"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import Footer from "../../components/Footer/Footer"

import {useParams} from "react-router-dom";
import React from "react"

export default function Category() {
  const { categoryId } = useParams();
  
  return (
    <>
    <div className="App">
      <NavBar/>
      <main>
        <ItemListContainer title="Producto" categoryId={categoryId} />
      </main>
      <Footer/>
    </div>
    </>
  );

}



