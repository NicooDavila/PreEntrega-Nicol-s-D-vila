import React from 'react'
import "./Item.css";

const Item = ({producto}) => {
    return (
        <section className='carta'>
        <div className='item'>
            <img src={producto.imagen} />
            <p>Precio: ${producto.price}</p>
            <h2>{producto.name}</h2>
            <h4>Categoria:{producto.categoria}</h4>
            <div>
            <a className='ver-mas' href={`/item/${producto.id}`}>Ver más</a>
            </div>
        </div>
        </section>
    )
}
export default Item