import React from "react";
import IMG from "../../images/img01.jpg"

export const ProductosLista = () => {
    return (
        <>
            <h1 className="title"> Productos </h1>
            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                            <img src={IMG} alt="#"/>
                        </div>
                    </a>
                    <div className="pie-producto">
                        <h1>
                            title
                        </h1>
                        <p>
                            Categoria
                        </p>
                        <p className="price">
                            150$
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



                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                            <img src={IMG} alt="#"/>
                        </div>
                    </a>
                    <div className="pie-producto">
                        <h1>
                            title
                        </h1>
                        <p>
                            Categoria
                        </p>
                        <p className="price">
                            150$
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


                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                            <img src={IMG} alt="#"/>
                        </div>
                    </a>
                    <div className="pie-producto">
                        <h1>
                            title
                        </h1>
                        <p>
                            Categoria
                        </p>
                        <p className="price">
                            150$
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

            </div>
        </>
    )
}