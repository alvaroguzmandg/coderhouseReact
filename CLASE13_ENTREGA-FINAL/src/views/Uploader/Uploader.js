import NavBar from "../../components/Navbar/NavBar";

import { useEffect, useState } from "react";
import React from "react";

import UploaderProduct from "../../components/UploaderProduct/UploaderProduct";
import Footer from "../../components/Footer/Footer";  




export default function Uploader() {

  const [status, setLogin] = useState(false);

  const [data, setData] = useState();
    

  function handleSubmit (event) {
    event.preventDefault();
    let usuario = event.target.usuario.value
    let psw = event.target.psw.value
    if(usuario === "admin" && psw === "admin"){
      setLogin(true)
    }
  }

const UploaderValidator2 = () =>{
  return(
  <form onSubmit={handleSubmit}>
  <h1>INICIA SESIÓN</h1>
  <input className="campo-formulario" type="text" name="usuario" id="usuario" placeholder="Ingresá tu usuario" required/>
  <input className="campo-formulario" type="password" name="psw" id="contraseña" placeholder="Ingresá tu contraseña" required/>    
  <input className="finalizar-compra" type="submit" value="INICIAR SESIÓN" />
</form>
)
}

  const Contenido = () =>{
    return(status ? <UploaderProduct></UploaderProduct> : <UploaderValidator2></UploaderValidator2>)
  }




// useEffect(() => {
//   Contenido()
//   console.log("el estado es",status)
//   }, [status]);


useEffect(() => {
  console.log(status)
  }, [status]);



  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
        {<Contenido></Contenido>}
        {/* <UploaderValidator></UploaderValidator> */}
        </main>
        <Footer/>
      </div>
    </>
  )
}



