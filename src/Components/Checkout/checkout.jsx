import React, { useContext, useState} from 'react'
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc} from "firebase/firestore";
import { db } from '../../Firebase/config';

const checkout = () => {

    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } =useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
        })
        
    }

    if (pedidoId){
        return(
            <div className="container">
                <h1 className="main title">Muchas gracias por la compra</h1>

                <p>Tu número de pedido es: {pedidoId} </p>
            </div>
        )
    }


    return (
    <div className='container'>
        <h1>a</h1>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
            <input type="text" placeholder='Ingresa tu teléfono' {...register("telefono")} />
            <input type="text" placeholder='Ingresa tu e-mail' {...register("email")} />

            <button className='enviar' type="submit">Comprar</button>




        </form>
    </div>
    )
}


export default checkout