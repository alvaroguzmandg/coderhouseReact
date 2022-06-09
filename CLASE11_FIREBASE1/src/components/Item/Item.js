import {Card} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import React from "react"


export default function Item({item}) {
  const navigate = useNavigate()
  return(
    
    <Card style={{ width: "30rem", border: "0px" }} onClick={() => navigate(`/product/${item.id}`)}>
        <div className="producto-bloque"> 
          <Link to={`/product/${item.id}`}>
            <span className="producto-imagen"><img src={item.image} alt='Foto del Producto'/></span>
            <span className="producto-nombre">{item.brand} {item.model}</span>
            <span className="producto-precio">Precio <span>${item.price}</span></span>
          </Link>
          {/* {count === 0 ? <AddButton handleOnSubmit={onSubmit}/> : <Link to="/cart"><ComprarButton/></Link>} */}
        </div>
      </Card>       
  )
}

