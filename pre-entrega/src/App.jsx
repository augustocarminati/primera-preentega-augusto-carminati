import {Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  
return (
  <div>
    <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:detailId" element={<ItemDetailContainer />} />
    </Routes>
  </div>
)
}
export default App;
