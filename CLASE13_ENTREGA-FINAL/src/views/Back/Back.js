import NavBar from "../../components/Navbar/NavBar";

import BackUploader from "../../components/BackUploader/BackUploader";
import Footer from "../../components/Footer/Footer";  

import {CartContext} from "../../context/CartContext"
import{useContext} from "react";
import { Link } from "react-router-dom";
import React from "react"

export default function Back() {
    
  const {cart} = useContext(CartContext)

  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
        <BackUploader></BackUploader >
        </main>
        <Footer/>
      </div>
    </>
  )
}



