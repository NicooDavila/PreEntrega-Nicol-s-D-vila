import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import productosJson from "../../../productos.json";
import "./ItemListContainer"


function asyncMock(categoryId) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (categoryId === undefined) {
            resolve(productosJson);
        }else{
            const productosFiltrados = productosJson.filter((item) => {
                return item.categoria === categoryId
            })
            resolve(productosFiltrados)
        }
    }, 1500);
})
}

export default function ItemListContainer() {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState ([]);

    useEffect(() => {
        asyncMock(categoryId).then((res) => setProductos(res));
    }, [categoryId]);

    return(
        <div>
            <h1>{categoryId ? categoryId : "Bienvenido a GYM Empire"} </h1>
                <ItemList productos={productos}/>
        </div>
        )
}