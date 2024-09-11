import React from "react";



export const ProductItem = () => ({
    id,
    title, 
    price,
    image,
    category,
}) => {
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
            <button className="btn">
                Añadir al Carrito
            </button>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
        </div>
    </div>
    )
}