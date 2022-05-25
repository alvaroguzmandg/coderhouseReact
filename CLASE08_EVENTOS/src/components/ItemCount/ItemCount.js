import React from "react";
import {Link} from "react-router-dom"

export default function AddButton({stock, onSubmit}){
  const [count, setCount] = React.useState(0)



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

  const AddButton = ({handleOnSubmit})=>{
    return(
      <button className="boton-agregar" onClick={()=>handleOnSubmit()}>
        Agregar al carrito
      </button>
    )
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
    <div className="contenedor-agregar">
      <StockButton text="-" handleOnClick={onRest}/>
      <span className="add-button-count">{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/>
    </div>
    {/* <AddButton handleOnSubmit={onSubmit}/> */}
    {count === 0 ? <AddButton handleOnSubmit={onSubmit}/> : <Link to="/cart"><ComprarButton/></Link>}
    </>
  )

}







