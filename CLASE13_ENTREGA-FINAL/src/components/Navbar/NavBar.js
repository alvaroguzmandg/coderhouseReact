// Componente que renderiza el header de navegación principal

// Componentes utilizados
import CartWidget from "../CartWidget/CartWidget";
import NavCategory from "../NavCategory/NavCategory";
import NavBarContainer from "../NavBarContainer/NavBarContainer";

import {NavLink} from "react-router-dom";
import React from "react"

export default function NavBar(){

    const navStyles={
        maxWidth: 1200,
        display:"flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap:40,
        listStyle: "none",
        color: "white",
        margin: "0 auto"
    }


    return(
        <>
            <header className="header" >
                <div className="logo">
                    <NavLink to="/"><img src="https://alvaroguzmandg.github.io/coderhouse/images/logo-runclub.png" alt="Logo"></img></NavLink>
                </div>
                <ul className="links" style={navStyles}>
                    <NavBarContainer/>
                </ul>
                <CartWidget cantidad={0}/>
            </header>
            <NavCategory/>
        </>
    )
    
}