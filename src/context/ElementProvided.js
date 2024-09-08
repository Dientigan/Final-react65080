import React, {useState, useEffect, createContext} from "react";
import Data from '../Data'


export const DataConstext = createContext();

export const ElementProvided = (props) =>{
    const [productos, setProductos] = useState([])

    useEffect(() =>{
        const producto = Data.items
        if (producto){
            setProductos(producto)
        } else{
            setProductos([])
        }

    },[])

const value = {
    productos : [productos]
}

return (
    <DataConstext.Provider value= {value}>
        {props.children}
    </DataConstext.Provider>
)

}