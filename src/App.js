import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/router/home/Home"
import {Route,Routes} from "react-router-dom"
import Products from "./components/router/products/Products";
import Product from "./components/router/product/Product";
import Cart from "./components/router/cart/Cart";




function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/products" element={ <Products/>} />
        <Route path="/products/:id" element={ <Product/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
     
      

    </div>
  );
}

export default App;
