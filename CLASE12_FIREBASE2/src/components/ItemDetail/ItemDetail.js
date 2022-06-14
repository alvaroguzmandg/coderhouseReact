import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import React from "react";
import { CartContext } from "../../context/CartContext";


export default function ItemDetail ({item}) {

const {addToCart, removeFromCart, isInCart} = React.useContext(CartContext)
const [count, setCount] = React.useState(1)

const ComprarButton = ()=>{
  return(
    <>
    <Link to={`/cart`}>
    <button className="boton-agregar">
      Terminar mi compra
    </button>
    </Link>
    </>
  )
}

    return(
      <>
      <div className="vista-detalle">
        <div className="vista-producto-bloque">
          <span className="vista-bloque-izq">
            <span className="vista-producto-imagen"><img src={item.image} alt='Foto del Producto'/></span>
          </span>
          <span className="vista-bloque-der">
            <span className="vista-producto-marca">{item.brand}</span>      
            <span className="vista-producto-modelo">{item.model}</span>      
            <span className="vista-producto-precio">${item.price}</span>
            <span className="vista-producto-descripcion">
              Descripción del Producto:
              <span className="vista-producto-descripcion-texto">{item.description}</span>
              {isInCart(item.id) ? (<ComprarButton/>) : 
              <ItemCount 
                stock={item.stock} 
                count={count}
                onSubmit={() => addToCart(item, count)}
                onDelete= {()=>removeFromCart(item, count)}
                setCount={setCount}/>   
              }           
            </span>
          </span>
        </div>   
      </div>
      </>
    )
}
