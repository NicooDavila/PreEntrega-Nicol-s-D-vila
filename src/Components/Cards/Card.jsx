import React from 'react'
import "./Card.css";

const Card = ({img, price, title, genero, description}) => {
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h4>$ {price}</h4>
            <h1>{title}</h1>
            <h5>{genero}</h5>
            <p>{description}</p>
        </div>
    )
}

export default Card