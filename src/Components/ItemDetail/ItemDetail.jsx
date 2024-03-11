import { useContext, useState } from "react";

import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import "./ItemDetail.css";




const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
        agregarAlCarrito(item, cantidad)
    }

    return (
    <div className="container-product">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.name} />
            <div className="producto-info">
                <h3 className="titulo">{item.name}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoría: {item.categoria}</p>
                <p className="precio">Precio: ${item.price}</p>
                
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
            </div>
        </div>
    </div>
  )
}

export default ItemDetail