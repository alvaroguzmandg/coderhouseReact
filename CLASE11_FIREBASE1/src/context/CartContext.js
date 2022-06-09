import { type } from "@testing-library/user-event/dist/type";
import React from "react"

const CartContext = React.createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {
const [cart, setCart] = React.useState([])



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



  // const newCart = cart.map(cartItem => {
  //   if(cart.length === 1){
  //     setCart([])
  //   }
  //   if(cartItem.id === item.id) {
  //     if(cartItem.quantity === 1){
  //       const newCart = cart.filter((cartItem)=> cartItem.id !== item.id)
  //       setCart([...cart, {...item, quantity: -count}])
  //     }else{
  //           cartItem.quantity =- count 
  //           if(cartItem.quantity < 1){
  //             setCart([])
  //             return cartItem
  //           }
  //         return cartItem
  //     } 
  //   }  
  // })  
  // console.log(cart)
}


// Borrar carrito
const deleteAll = () =>{
  setCart([])
}

//Función para ver si el producto está en el carrito
const isInCart = (id) =>{
  return cart.find(item => item.id === id)
}

  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      cart,
    }}>{children}</Provider>
  )
}

export {CartContext, CartProvider}