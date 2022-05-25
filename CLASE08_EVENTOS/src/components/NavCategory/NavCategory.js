import React from "react";
import {NavLink} from "react-router-dom";

export default function NavCategory(){

    const Button = ({texto}) =>{
        return (
            <span className="filtro-categorias">{texto}</span>
        )
    }
    return(
    <>
    <div className="filtro-principal">
    <NavLink to="/category/1"><Button texto="Zapatillas Hombre" /></NavLink>
    <NavLink to="/category/2"><Button texto="Zapatillas Mujer" /></NavLink>
    </div>
    </>
    )
}