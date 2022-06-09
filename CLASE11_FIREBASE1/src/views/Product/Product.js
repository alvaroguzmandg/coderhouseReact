import React from "react"
import { useParams } from "react-router-dom"
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import NavBar from "../../components/Navbar/NavBar"
import Footer from "../../components/Footer/Footer"

export default function Product () {
  
  const {productId} = useParams()
  
  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
        <ItemDetailContainer productId={productId}/>
        </main>
        <Footer/>
      </div>
    </>
  )
}