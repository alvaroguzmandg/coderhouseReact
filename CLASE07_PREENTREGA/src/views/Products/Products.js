import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

export default function Products(){
  return(
    <>
      <div className="App">
        <NavBar/>
        <main>
        <h1>Listado de Productos</h1>
        <ItemListContainer/>
        </main>
        <Footer/>
      </div>
    </>
  )
}