// Vista de página para cargar productos en Firebase

// Componentes utilizados
import NavBar from "../../components/Navbar/NavBar";
import UploaderProduct from "../../components/UploaderProduct/UploaderProduct";
import Footer from "../../components/Footer/Footer";  

import React from "react";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Uploader() {
  const MySwal = withReactContent(Swal)
  const [status, setLogin] = useState(false);
    
  // Función de validación de usuario
  // Está hardcodeado el usuario y contraseña en "admin"
  // En futuras actualizaciones, será definido en Firebase
  function handleSubmit (event) {
    event.preventDefault();
    let usuario = event.target.usuario.value
    let psw = event.target.psw.value
    if(usuario === "admin" && psw === "admin"){
      setLogin(true)
    }else{
      Swal.fire({
        icon: 'error',
        title: '¡Contraseña Incorrecta!',
        timer: 2000,
      })
    }
  }

  // Componente de validación de ingreso al Admin
  const UploaderValidator = () =>{
    return(
      <form onSubmit={handleSubmit}>
        <h1>INICIA SESIÓN</h1>
        <input className="campo-formulario" type="text" name="usuario" id="usuario" placeholder="Ingresá tu usuario" required/>
        <input className="campo-formulario" type="password" name="psw" id="contraseña" placeholder="Ingresá tu contraseña" required/>
        <span className="campo-formulario-error" id="emailError">Por favor revisa el correo electrónico ingresado</span>
        <input className="finalizar-compra" type="submit" value="INICIAR SESIÓN" />
      </form>
    )
  }

  const Contenido = () =>{
    return(
      // Si el estado es "true" muestra el admin para cargar productos
      // Si el estado es "false" requiere autenticarse
      status ? <UploaderProduct></UploaderProduct> : <UploaderValidator></UploaderValidator>
      )
  }

  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
        {<Contenido></Contenido>}
        </main>
        <Footer/>
      </div>
    </>
  )

}



