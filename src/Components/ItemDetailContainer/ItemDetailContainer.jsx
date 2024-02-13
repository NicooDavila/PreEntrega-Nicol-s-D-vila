import { useState } from "react";
import { useParams } from "react-router-dom";
import productosJson from "../../../productos.json";
import { useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";

function asyncMock(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === undefined) {
                resolve({});
            }else{
                const productoFiltrado = productosJson.filter((item) => {
                    return item.id == id
                })
                
                resolve(productoFiltrado [0])

            }
        }, 1500);
    })
    }
    
    export default function ItemDetailContainer() {
        const { id } = useParams();
        const [producto, setProducto] = useState ({});
    
        useEffect(() => {
            asyncMock(id).then((res) => setProducto(res));
        }, [id]);
        return (
        <main className="item-detail">
            <section className="item-list-container">
                <section className="bloque">
                    <div>
                    <img src={producto.imagen} />
                    </div>
                    <div className="container detalles">
                    <h1>{producto.name}</h1>
                    <p>Precio: ${producto.price}</p>
                    <p>Descripción: {producto.descripcion}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <p>Stock: {producto.stock} </p>
                    <ItemCount initial= {1} stock= {producto.stock} />
                    </div>
                </section>
            </section>
        </main>
    )
}

