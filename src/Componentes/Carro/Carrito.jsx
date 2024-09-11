import React, { useContext } from "react";
import { DataConstext } from "../../context/ElementProvided"

export const Carrito = () => {

    const value = useContext(DataConstext)
    const [menu, setmenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () =>{
        setmenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const resta = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad =1: item.cantidad -=1
            }
            setCarrito([...carrito])
        })
    }

    const suma = id => {
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad +=1;
            }
            setCarrito([carrito])
        })
    }

    const removePoducto = id =>{
        if(window.confirm("Quiere suspender el producto?")){
            carrito.forEach((item, index)=>{
                if(item.id === id){

                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }
            })
        }
        setCarrito([...carrito])
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito-close">
                    <box-icon name="x"></box-icon>
                </div>
                    <h2>Su carrito</h2>
                <div className="carrito-center">
                    {
                        carrito.lenght === 0 ? <h2 style={{
                            textAlign: "center", fontSize: "3rem"
                        }} >
                            Carrito Vacio
                        </h2>: <>
{

                    carrito.map((producto) =>( 
                        <div className="carrito-item" key={producto.id}>
                            <img src={ producto.image.default } alt="{title}" />
                            <div>
                                <h3>{producto.title}</h3>
                                <p className="price">${producto.price}</p>
                            </div>
                            <div>
                                <box-icon className="up-arrow" type="solid" onClick= {() => suma(producto.id)} ></box-icon>
                                <p className="cantidad">{producto.cantidad}</p>
                                <box-icon name="down-arrow" type="solid" onClick= {() => resta(producto.id)}></box-icon>
                            </div>
                            <div className="remove-item" onClick={() => removePoducto(producto.id)}>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>
                        ))
}
                </>
                    }

                    <div className="carrito-foo">
                        <h3>Total: $ {total} </h3>
                        <button className="btn"> Payment </button>
                    </div>
                </div>
            </div>
        </div>
    )
}