import React, {useContext} from "react";
import { DataConstext } from "../../context/ElementProvided";
import { ProductItem } from "./ProductItem";

export const ProductosLista = () => {

    const value = useContext(DataConstext)
    const [productos] = value.productos
    

    return (
        <>
            <h1 className="title"> 
                Productos 
            </h1>

            <div className="productos">
                {
                    productos.map(producto =>(
                        <ProductItem 
                            key= {producto.id} 
                            id={producto.id} 
                            title={producto.title} 
                            price={producto.price} 
                            image={producto.image} 
                            category={producto.category} 
                            Cantidad={producto.cantidad} 

                            />
                    ))
                }
            </div>
        </>
    )
}