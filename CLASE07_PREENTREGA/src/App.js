import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/product/:productId" element={<Product/>} />
      <Route exact path="/category/:categoryId" element={<Category/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
  </BrowserRouter>

  </>
  )
} 

export default App;
