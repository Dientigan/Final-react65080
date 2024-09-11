import React, { Component } from "react";
import {Header} from "./Componentes/Header/Navbar"
import { ProductosLista } from "./Componentes/Productos/Items";
import 'boxicons';
import { BrowserRouter as router } from "react-router-dom";
import {Paginas} from "./Componentes/Paginas";
import { ElementProvided } from "./context/ElementProvided";
import { Carrito } from "./Componentes/Carro"


/*Renderizado de objetos*/

function App() {
  return (

    <ElementProvided>
      <div className="App">
        <router>
        
          <Header />
          <Carrito />
          <Paginas />

        </router>
      </div>
    </ElementProvided>
  );
}

/*Llamado de funciones*/

export default App;
