import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBarContainer(){

      const navLinks = [{
          id:0,
          url:"/",
          link:"INICIO"
      },{
        id:1,
          url:"/products",
          link:"PRODUCTOS"
      },{
        id:2,
          url:"/cart",
          link:"CARRITO"
      }]
      
      return(
        navLinks.map((nav) => (<li key={nav.id}><NavLink to={nav.url}>{nav.link}</NavLink></li>))
      )

}