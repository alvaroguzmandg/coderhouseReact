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
        <ItemListContainer/>
        </main>
        <Footer/>
      </div>
    </>
  )
  
}