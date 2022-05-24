import React from "react"
export default function NavCategory(){

    const Button = ({texto}) =>{
        return (
            <span className="filtro-categorias">{texto}</span>
        )
    }
    return(
    <>
    <div className="filtro-principal">
      <Button texto="Zapatillas" />
      <Button texto="Pantalones" />
      <Button texto="Remeras" />
      <Button texto="Abrigos" />
    </div>
    </>
    )
}