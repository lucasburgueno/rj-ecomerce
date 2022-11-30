import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nosotros } from "./Nosotros/Nosotros";
import { Contacto } from "./Contacto/Contacto";
import Buzos from "./components/Ropa/Buzos";
import Remeras from "./components/Ropa/Remeras";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext, CartProvider } from "./components/Context/CartContext";
import { useState } from "react";
import Cart from "./components/Cart/Cart";


const App = ()=>{


  return(
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element ={<Cart/>}/>
          <Route path="/remeras" element = {<Remeras/>}/>
          <Route path="/buzos" element = {<Buzos/>}/>
          <Route path="/nosotros" element = {<Nosotros/>}/>
          <Route path="/contacto" element = {<Contacto/>}/>
          <Route path="*" element={ <Navigate to = "/"/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
