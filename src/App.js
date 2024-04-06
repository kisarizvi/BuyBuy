import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogue from "./Pages/Catalogue";
import Cart from "./Pages/Cart";
import Catagories from "./Pages/Catagories";
import Product from "./Pages/Product";
import Register from "./Pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/fashion" element={<Catagories catagory="fashion" />} />
          <Route path="/favorite" element={<Catagories catagory="favorite" />} />
          <Route path="/lifestyle" element={<Catagories catagory="lifestyle" />} />
          <Route path="/product" element={Product}>
            <Route path=":productID" element={Product} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
