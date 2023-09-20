import {Routes, Route} from "react-router-dom";
import CartProvider from "./context/CartProvider";
import ItemListContainer from "./components/Container/ItemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";


function App() {
  
return (
  <CartProvider>
    <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:detailId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </CartProvider>
);
};

export default App;
