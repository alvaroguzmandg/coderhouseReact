import {Card} from 'react-bootstrap'
import {Link} from "react-router-dom"
export default function Item({ item}) {


  return(
    
    <Card style={{ width: "30rem", border: "0px" }}>
        <div className="producto-bloque"> 
          <Link to={`/product/${item.id}`}>
            <span className="producto-imagen"><img src={item.image} alt='Foto del Producto'/></span>
            <span className="producto-nombre">{item.marca} {item.modelo}</span>
            <span className="producto-precio">Precio <span>${item.precio}</span></span>
          </Link>
          {/* {count === 0 ? <AddButton handleOnSubmit={onSubmit}/> : <Link to="/cart"><ComprarButton/></Link>} */}
        </div>
      </Card>       
  )
}

