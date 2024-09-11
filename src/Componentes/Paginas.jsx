import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, router } from "react-router-dom";
import { Landing } from "./Inicio/Landing"
import { ProductosLista } from "./Productos/Items";



export const Paginas = () => {
    return (
       <section>
            <Routes>
              <Route path='/' exact Component={<Landing />} />
              <Route path='/productos' exact Component={<ProductosLista />} />
            </Routes> 
        </section> 
    )
}