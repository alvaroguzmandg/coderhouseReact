import ItemCount from "../ItemCount/ItemCount";
export default function ItemDetail({item}){
    return(
      <>
      <div className="vista-detalle">
        <div className="vista-producto-bloque">
          <span className="vista-bloque-izq">
            <span className="vista-producto-imagen"><img src={item.image} alt='Foto del Producto'/></span>
          </span>
          <span className="vista-bloque-der">
            <span className="vista-producto-marca">{item.marca}</span>      
            <span className="vista-producto-modelo">{item.modelo}</span>      
            <span className="vista-producto-precio">${item.precio}</span>
            <span className="vista-producto-descripcion">
              Descripción del Producto:
              <span className="vista-producto-descripcion-texto">{item.descripcion}</span>
              <ItemCount stock ={item.stock}/>
            </span>
          </span>
        </div>   
      </div>
      </>
    )
}
