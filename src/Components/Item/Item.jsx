import React from 'react'
import "./Item.css";

export default function Item({producto}) {
    return (
        <div className='item'>
            <img src={producto.imagen} />
            <h1>${producto.price}</h1>
            <h2>{producto.name}</h2>
            <h4>{producto.categoria}</h4>
        </div>
    )
}