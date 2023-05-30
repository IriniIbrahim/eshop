import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop"
import { Cart } from "./pages/cart/cart"
import { ShopContextProvider } from './context/shop-context';
import { Login } from './pages/authorize/login';
import { Register } from './pages/authorize/register';

function App() {


  return (
    <div className="App">

      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
