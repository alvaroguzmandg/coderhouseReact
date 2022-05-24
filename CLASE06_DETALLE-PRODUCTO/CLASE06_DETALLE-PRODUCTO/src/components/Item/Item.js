import ItemCount from "../ItemCount/ItemCount";
import {Card} from 'react-bootstrap';
import React from "react";

const Item =({producto}) =>{
  return(
    <Card style={{ width: "18rem", border: "1px solid #ccc" }}>
        <div className="producto-bloque">
          <span className="producto-nombre">{producto.marca} {producto.modelo}</span>      
          <span className="producto-imagen"><img src={producto.image} alt='Foto del Producto'/></span>
          <span className="producto-precio">${producto.precio}</span>
          <ItemCount stock ={producto.stock}/>
        </div>
      </Card>       
  )
}

export default Item

