import React, { useContext } from 'react'
import { BsCart3 } from "react-icons/bs";
import { CartContext } from '../Context/CartContext';

const CarWidget = () => {

  const {carrito} = useContext(CartContext);
  var cantidadItems = 0
  carrito.map((producto) => {
    cantidadItems = cantidadItems + producto.cantidad
  }
  )
  return (
    <div className='container'>
        <button>
        <span className='numero'> {cantidadItems} </span>
        <BsCart3>
          
        </BsCart3>
        </button>

    </div>
  )
}

export default CarWidget