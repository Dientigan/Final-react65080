import React from "react";

export const Carrito = () => {
    return (
        <div className="carritos show">
            <div className="carrito show">
                <div className="carrito-close">
                    <box-icon name="x"></box-icon>
                </div>
                    <h2>Su carrito</h2>
                <div className="carrito-center"> 
                    <div className="carrito-item">
                        <img src="{ Card }" alt="Title" />
                        <div>
                            <h3>Title</h3>
                            <p className="price">$120</p>
                        </div>
                        <div>
                            <box-icon className="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove-item">
                        <box-icon name="trash" type="solid"></box-icon>
                        </div>
                    </div>
                    <div className="carrito-foo">
                        <h3>Total: 1234</h3>
                        <button className="btn"> Payment </button>
                    </div>
                </div>
            </div>
        </div>
    )
}