import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';



const Carrito = () => {

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  
  const handleVaciar = () => {
    vaciarCarrito();
  }
 
  

  return (
    <div className='container'>
      {
        carrito.map((producto) =>(
          <div key={producto.id}>
            <h2>{producto.name}</h2>
            <p> Precio Unit: ${producto.price}</p>
            <p> Precio Total: ${producto.price * producto.cantidad}</p>

            <p>Cantidad: {producto.cantidad} </p>
          </div>
        ))

        
      }

      {
        carrito.length > 0 ?
        <>
          <h2>Precio total: ${precioTotal} </h2>
          <div className='botones-final'>
            <button className='vaciar-boton' onClick={handleVaciar}> Vaciar</button>
            <button className='comprar'>
            <Link to="/checkout">Finalizar la compra</Link>
            </button>
          </div>
        </>:

        <h2>El Carrito está vacío, Llénalo!!!</h2>
      
      
      
      }



    </div>
  )
}

export default Carrito