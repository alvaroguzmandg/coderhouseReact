import ItemCount from "../ItemCount/ItemCount";
import React from "react";
export default function ItemDetail({item, count}){

const onSubmit =()=>{
  alert("¡Agrega productos!")
}
  
const ComprarButton = ()=>{
  return(
    <>
    <button className="boton-agregar">
      AGREGAR AL CARRITO ({count})
    </button>
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
            <span className="vista-producto-marca">{item.marca}</span>      
            <span className="vista-producto-modelo">{item.modelo}</span>      
            <span className="vista-producto-precio">${item.precio}</span>
            <span className="vista-producto-descripcion">
              Descripción del Producto:
              <span className="vista-producto-descripcion-texto">{item.descripcion}</span>
              <ItemCount stock={item.stock} onSubmit={onSubmit}/>
              {/* <AddButton handleOnSubmit={onSubmit}/> */}
            </span>
          </span>
        </div>   
      </div>
      </>
    )
}
