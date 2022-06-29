import React from "react"
import{useEffect, useState} from "react";
import { Link } from "react-router-dom";

const CartContext = React.createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [precioTotal, setPrecioTotal] =useState(0);


  //Botón de seguir navegando
  const BackProduct = ({text}) =>{
    return(
      <>
      <span className="empty-search">
        <h2 className="filtro-categorias">{text}</h2>
        <Link to="/products">Volver al listado de productos</Link>
      </span>
      </>
    )
  }


  //Agregar al carrito
  const addToCart = (item, count) => {
    if(isInCart(item.id)) {
      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id) {
          cartItem.quantity = cartItem.quantity +count
        }
        return cartItem
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, {...item, quantity: +count}])
    }
  }

  // Remover del carrito
  const removeFromCart = (item) =>{
    const newCart = cart.map(cartItem => {
      if(cartItem.id === item.id){
        cartItem.quantity = 0
        if(cartItem.quantity === 0){
          const newCart = cart.filter(cartItem => cartItem.id !== item.id)
          setCart(newCart)
        }
        return cartItem
      }else{
          return cartItem
      }
      
      })
      if(cart.length === 1){
        setCart([])
      }
  }



  // Borrar carrito
  const deleteAll = () =>{
    setCart([])
  }



  //Función para ver si el producto está en el carrito
  const isInCart = (id) =>{
    return cart.find(item => item.id === id)
  }



  useEffect(() => {
    setPrecioTotal(cart.reduce((acc,{quantity,price})=> acc + quantity * price,0)
    );
  }, [cart]);



    return (
      <Provider value={{
        addToCart,
        removeFromCart,
        deleteAll,
        isInCart,
        BackProduct,
        cart,
        precioTotal, 
      }}>{children}</Provider>
    )
    
}

export {CartContext, CartProvider}