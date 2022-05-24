import React from "react";


export default function AddButton({stock}){
  const [count, setCount] = React.useState(1)


  /* --------------------- Función para restar contador --------------------- */
  const onAdd = () =>{
    if(count < stock){
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
    <button className="stock-button" onClick={handleOnClick}>
      {text}
    </button>
    )
  }

  const AddButton = ()=>{
    return(
      <button className="boton-agregar">
        Agregar al carrito
      </button>
    )
  }

  return(
    <>
    <div className="contenedor-agregar">
      <StockButton text="-" handleOnClick={onRest}/>
      <span className="add-button-count">{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/>
    </div>
    <AddButton />
    </>
  )

}