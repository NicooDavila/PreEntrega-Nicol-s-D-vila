import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer";
import "./ItemListContainer.css";
import Carousel from '../Carrusel/Carousel';
import { collection, getDocs, doc, query, where } from "firebase/firestore";
import { db } from "../../Firebase/config";






export default function ItemListContainer(){

        const [productos, setProductos] = useState([]);

            const [name, setName] = useState("Productos");

            const { categoryId } = useParams();

                useEffect(() => {

                    const productosRef = collection(db, "productos");

                    const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef;

                    getDocs(q)
                    .then((resp) => {

                        setProductos(
                            resp.docs.map((doc) => {
                                return { ...doc.data(), id: doc.id }
                            })
                        )
                    })
                }, [categoryId])
                

    


const mensaje = categoryId ? categoryId : "BIENVENIDO A GYM EMPIRE"




    return(
        <div>
            <h1 className="bienvenida"> {mensaje} </h1>
            {
                categoryId ? <div></div> : <Carousel/>
            }
            
                <ItemList productos={productos} name = {name} />
        </div>
        )
}



