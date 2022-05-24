import NavBar from "./components/Navbar/NavBar";  
import Footer from "./components/Footer/Footer";  
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import { productos } from "./data/products";




function App() {
  return (
  <>
    <div className="App">
      <NavBar/>
      <main>
        <ItemListContainer />
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App;
