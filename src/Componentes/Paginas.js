import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./Inicio"
import ProductosLista from "./Productos";



export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/productos' element={<ProductosLista />} />
            </Routes>
        </section>
    )
}