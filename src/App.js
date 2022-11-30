import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nosotros } from "./Nosotros/Nosotros";
import { Contacto } from "./Contacto/Contacto";
import Genero from "./Genero/Genero";
import Buzos from "./components/Ropa/Buzos";
import Remeras from "./components/Ropa/Remeras";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


const App = ()=>{
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/remeras" element = {<Remeras/>}/>
        <Route path="/buzos" element = {<Buzos/>}/>
        <Route path="/nosotros" element = {<Nosotros/>}/>
        <Route path="/genero" element = {<Genero/>}/>
        <Route path="/contacto" element = {<Contacto/>}/>
        <Route path="*" element={ <Navigate to = "/"/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
