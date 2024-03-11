import React from "react";
import "./ItemCount.css";
import {useState} from "react";

// export const ItemCount = ({initial, stock }) => {
//     const [count, setCount] = useState(initial);

//     const decrease = () => {
//         setCount(count - 1);
//     }

//     const increase = () => {
//         setCount (count + 1);
//     }
//     return (
//         <div className="counter">
//             <button disabled= {count <= 1} onClick={decrease}>-</button>
//             <span>{count}</span>
//             <button disabled= {count >= stock} onClick=  {increase}>+</button>
//             <div>
//                 <button>Agregar al Carrito</button>
//             </div>
//         </div>
//     );
// }

// export default ItemCount;
// import React from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div className="item-count">

        <div className="suma-resta">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount