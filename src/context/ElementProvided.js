import React, {useState, useEffect, createContext} from "react";
import Data from '../Data.js'


export const DataConstext = createContext();

export const ElementProvided = (props) =>{
    const [productos, setProductos] = useState([])
    const [menu, setmenu] = useState(false);
    const [carrito, setcarritos] = useState([])
    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const producto = Data.items
        if (producto){
            setProductos(producto)
        } else{
            setProductos([])
        }

    },[])

    const addcarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto =>{
                return producto.id === id
            })
            setcarrito([...carrito, ...data])
        }else{
            alert("se agrego al carrito")
        }
    }

useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem('datacarrito'))
    if(dataCarrito){
        setcarrito(dataCarrito)
    }
}, [])

useEffect(() => {
    localStorage.setItem('datacarrito', JSON.stringify(carrito))
}, [carrito])

useEffect(() =>{
    getTotal =() => {
    const res = carrito.reduce((prev, item) => {
        return prev + (item.price = item.catidad);
    }, 0)
    setTotal
    }
    getTotal()
}, [carrito])

const value = {
    productos : [productos],
    menu: [menu, setmenu],
    addcarrito, addcarrito,
    carrito: [carrito, setcarrito],
    total: [total, setTotal] 
}

return (
    <DataConstext.Provider value= {value}>
        {props.children}
    </DataConstext.Provider>
)

}