import CartWidget from "../CartWidget/CartWidget";
import NavCategory from "../NavCategory/NavCategory";
import {Link, NavLink} from "react-router-dom";

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
            <li><NavLink to="/">INICIO</NavLink></li>
            <li><NavLink to="/products">PRODUCTOS</NavLink></li>
            <li><NavLink to="/cart">CARRITO</NavLink></li>
        </ul>
        <CartWidget cantidad={0}/>
        
    </header>
    <NavCategory/>
    </>
    )
}