import './App.css';
import NavBar from '../src/Components/Navbar/NavBar.jsx';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import Carousel from './Components/Carrusel/Carousel.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Carrito from './Components/CartWidget/Carrito.jsx';
import { CartProvider } from './Components/Context/CartContext.jsx';
import Checkout from './Components/Checkout/checkout.jsx';

function App() {
  return (
    <CartProvider>

      <BrowserRouter>

        <NavBar/>



          <Routes>
            <Route path="/" element={<ItemListContainer/>}  />
            <Route path="/categoria/:categoryId" element= {<ItemListContainer/>} />
            <Route path="/item/:id" element= {<ItemDetailContainer/>} />
            <Route path="/carrito" element= {<Carrito/>} />
            <Route path="/checkout" element= {<Checkout/>} />
          </Routes>

      </BrowserRouter>

    </CartProvider>
  )
}

export default App
