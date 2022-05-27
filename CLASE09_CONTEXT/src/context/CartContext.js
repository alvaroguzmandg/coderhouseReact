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
const removeFromCart = (item, count) =>{

  const newCart = cart.map(cartItem => {
    if(cartItem.id === item.id) {
      if(cartItem.quantity === 1){
        const newCart = cart.filter((cartItem)=> cartItem.id !== item.id)
        setCart(newCart)
      }else{
          if(cartItem.id === item.id) {
            cartItem.quantity = cartItem.quantity - count 
            console.log(`Se eliminaron ${count} producto/s del carrito. En el carrito hay ${cartItem.quantity}`)
            if(cartItem.quantity < 1){
              const newCart = cart.filter((cartItem)=> cartItem.id !== item.id)
              setCart(newCart)
            }
          }
          return cartItem
      } 
    }    
  })
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