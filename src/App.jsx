import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import CartPage from "./Components/CartWidget/CartPage.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}  />
          <Route path="/categoria/:categoryId" element= {<ItemListContainer/>} />
          <Route path="/item/:id" element= {<ItemDetailContainer/>} />
          <Route path="/Cart" element= {<CartPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
