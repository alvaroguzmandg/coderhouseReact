// Página de vista del checkout

// Componentes utilizados
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"
import CheckoutOrder from "../../components/CheckoutOrder/CheckoutOrder"
import Footer from "../../components/Footer/Footer";  
import NavBar from "../../components/Navbar/NavBar";

import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";

import React from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {addDoc, getFirestore, collection, doc, runTransaction, Timestamp} from "firebase/firestore"

export default function Checkout() {

  const [data, setData] = useState();
  const [orderId, setOrderId] = useState();
  const [orderItems, setOrderItems] = useState();
  const { cart, precioTotal } = useContext(CartContext);
  const MySwal = withReactContent(Swal)
  const order= {
    buyer: data, 
    items: cart,
    total: precioTotal,
    status: "Generada",
    date: Timestamp.fromDate( new Date),
  };

  // Actualización de datos ingresados
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  // Validación del mail
  const validarEmail = () =>{
    if((data.email !== data.emailValidator)){
      document.getElementById("emailValidator").style.border= "2px solid red"
      document.getElementById("emailError").style.display= "block"
    }else{
      return true
    }
  }

  // Submit del formulario
  const handleSubmit = async (event) =>{
    event.preventDefault();
    setOrderItems(cart)
    const db = getFirestore();
    const orderColection = collection(db, "orders");
    // Validación de mail
    if(validarEmail())
    await addDoc(orderColection, order).then(({id}) => { 
        //**Sweet Alert de proceso de compra */
        let timerInterval
        Swal.fire({
          title: '¡Muchas gracias por tu compra!',
          html: 'Estamos procesando tu orden',
          timer: 1500,
          timerProgressBar: true,
          icon: 'success',
          didOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          // Se definen los datos de compra 
          setOrderId(id)
          // Se actualiza el stock de productos
          updateProducts()
          })
      })
    .catch(error => console.log(error))
  }
  
  // Actualización de stock
  const updateProducts = async () => {
    const db = getFirestore ()
    cart.forEach( async (item) => {
      const productRef = doc(db, `productos`, item.id)
      await runTransaction(db, async (transaction) => {
      const transfDoc = await transaction.get(productRef);
      if (!transfDoc.exists()) {
        console.error("El documento no existe")
      }
      const newStock = transfDoc.data().stock - item.quantity;
      transaction.update(productRef, { stock: newStock });
    });
    })
  }
  


  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
          {
            // Si la orden no fue realizada, se muestra el formulario de compra
            // Si la orden fue realizada, se muestra el resumen de compra
            !orderId ? <CheckoutForm handleChange={handleChange} handleSubmit={handleSubmit}></CheckoutForm> : <CheckoutOrder order={order} orderId={orderId}></CheckoutOrder>
          }
        </main>
        <Footer/>
      </div>
    </>
  )

}



