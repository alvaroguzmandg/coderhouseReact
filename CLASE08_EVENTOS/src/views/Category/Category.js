import NavBar from "../../components/Navbar/NavBar"
import Footer from "../../components/Footer/Footer"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import {useParams} from "react-router-dom";

export default function Category() {
  const { categoryId } = useParams();

  return (
<>
<div className="App">
  <NavBar/>
  <main>
  <h1>Listado de Productos</h1>
      <ItemListContainer title="Producto" categoryId={categoryId} />
  </main>
  <Footer/>
</div>
</>
  );
}



