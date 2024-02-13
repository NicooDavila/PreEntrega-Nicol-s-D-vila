import React from "react";
import "./ItemCount.css";
import {useState} from "react";

export const ItemCount = ({initial, stock }) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount (count + 1);
    }
    return (
        <div className="counter">
            <button disabled= {count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled= {count >= stock} onClick=  {increase}>+</button>
            <div>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;