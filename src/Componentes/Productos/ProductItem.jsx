import React, { useContext } from "react";
import { link } from "react-router-dom"
import { DataConstext } from "../../context/ElementProvided";



export const ProductItem = () => ({
    id,
    title, 
    price,
    image,
    category,
}) => {

    const value = useContext(DataConstext);
    const addcarrito = value.addcarrito

    return (
        <div className="producto">
        <a href="#">
            <div className="producto-img">
                <img src={image.default} alt={title} />
            </div>
        </a>
        <div className="pie-producto">
            <h1>
                {title}
            </h1>
            <p>
                {category}
            </p>
            <p className="price">
                ${price}
            </p>
        </div>
        <div className="button">
            <button className="btn" onClick={() => addcarrito(id)}>
                Añadir al Carrito
            </button>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
        </div>
    </div>
    )
}