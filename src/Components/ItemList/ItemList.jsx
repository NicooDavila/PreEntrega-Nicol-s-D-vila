import React from 'react'
import Item from "../Item/Item";
import { Link } from 'react-router-dom';

export default function ItemList({productos}) {
  console.log(productos)
  return (
    <div>
        {productos.map(producto =>(
          <Link to= {`/item/${producto.id}`}>
            <Item producto={producto} key={producto.id} />
          </Link>
        ))}
    </div>
  )
}
