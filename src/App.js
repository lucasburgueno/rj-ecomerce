import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

const App = ()=>{
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
