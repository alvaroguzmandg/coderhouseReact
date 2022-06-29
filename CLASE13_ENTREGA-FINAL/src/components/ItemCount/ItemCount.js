//Componente que maneja el contador y el botón de agregar al carrito de la vista del producto en el ItemDetail
import React from "react";

export default function AddButton({count, setCount, stock, onSubmit}){

  /* --------------------- Función para restar contador --------------------- */
  const onAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  /* --------------------- Función para aumentar contador --------------------- */
  const onRest = () =>{
    if(count >1){
      setCount(count -1)
    }
  }


  const StockButton =({handleOnClick, text})=>{
    return(
    <button className="stock-button" onClick={() => handleOnClick()}>{text}</button>
    )
  }

  const AddButton = ({handleOnSubmit})=>{
    return(
      <button className="boton-agregar" onClick={() =>handleOnSubmit()}>Agregar al carrito {count}</button>
    )
  }
  

  return(
    <>
    <div className="contenedor-agregar">
      <StockButton text="-" handleOnClick={onRest}/>
      <span className="add-button-count">{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/>
    </div>
    <AddButton handleOnSubmit={onSubmit}/>
    </>
  )

}







